import OpenAI from "openai";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { IconCopy, IconReload } from "@tabler/icons-react";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [userChatReq, setUserChatReq] = useState("");
  const [lastReq, setLastReq] = useState("");
  const [requestStarted, setRequestStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onHandleChatGPT3 = async (e, req) => {
    setUserChatReq("");
    setInputValue("");
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    setRequestStarted(true);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "system", content: req }],
    });

    setLastReq(req);

    setUserChatReq(completion.choices[0].message.content);
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  const copyTextToClipboard = async (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied the text for you my brotha");
    });
  };

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt={"logo"} width={140} height={100} />
      <div className={styles.chat}>
        {!requestStarted ? (
          <p className={styles.message}>
            Hey, what's up man? Let me know if you need anything
          </p>
        ) : (
          <>
            {userChatReq ? (
              <>
                <p className={styles.message}>{userChatReq}</p>
                <button
                  className={styles.icon}
                  onClick={() => copyTextToClipboard(userChatReq)}
                >
                  <IconCopy color="white" />
                </button>
                <button
                  className={styles.icon}
                  onClick={(e) => onHandleChatGPT3(e, lastReq)}
                >
                  <IconReload color="white" />
                </button>
              </>
            ) : (
              <div className={styles.loaderWrapper}>
                <Image
                  className={styles.loader}
                  src="/loader.png"
                  alt={"loader"}
                  width={100}
                  height={100}
                ></Image>
              </div>
            )}
          </>
        )}
      </div>
      <div>
        <form
          onSubmit={(e) => onHandleChatGPT3(e, inputValue)}
          className={styles.input}
        >
          <input
            type="text"
            value={inputValue}
            className={styles.text}
            onChange={onHandleInputValue}
          />
          <input type="submit" value={"Send"} className={styles.submit} />
        </form>
      </div>
    </div>
  );
}
