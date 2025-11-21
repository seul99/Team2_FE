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
  const handleSend = () => {
    if (!value.trim()) return; // 비어있으면 전송 X
    onSend(value); 
  };

  return (
    <C.InputWrapper>
      <C.InputArea>
        <C.ChatInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <C.SearchIcon onClick={handleSend}>
          <img src={search} style={{ width: 20, height: 20 }} />
        </C.SearchIcon>
      </C.InputArea>

      <C.MicInput onClick={onMicClick}>
        <img src={mic} style={{ width: 20, height: 26 }} />
      </C.MicInput>
    </C.InputWrapper>
  );
}
