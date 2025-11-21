import * as C from "../../styles/StyledChat";
import search from "/images/chatbot/search.png";
import mic from "/images/chatbot/mic.png";

export default function InputBar({
  value,
  onChange,
  onSend,
  onMicClick,
  placeholder = "무엇이든 물어보세요.",
}) {
  return (
    <C.InputWrapper>
      <C.InputArea>
        <C.ChatInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <C.SearchIcon onClick={onSend}>
          <img src={search} style={{ width: 20, height: 20 }} />
        </C.SearchIcon>
      </C.InputArea>

      <C.MicInput onClick={onMicClick}>
        <img src={mic} style={{ width: 20, height: 26 }} />
      </C.MicInput>
    </C.InputWrapper>
  );
}
