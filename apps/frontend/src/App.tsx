import { useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');
  const [conversation, setConversation] = useState<Array<{ role: string; content: string }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 사용자 메시지 추가
    const userMessage = { role: 'user', content: message };
    const newConversation = [...conversation, userMessage];
    setConversation(newConversation);
    setMessage('');

    // 여기에 백엔드 API 호출 로직이 들어갈 예정
    // 임시 응답
    setTimeout(() => {
      setConversation([
        ...newConversation,
        {
          role: 'assistant',
          content:
            'This is a placeholder response. The actual AI conversation will be implemented soon.',
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <header className="py-4 text-center">
        <h1 className="text-3xl font-bold">AI 영어 회화 서비스</h1>
        <p className="text-gray-500 mt-2">AI와 영어로 대화해보세요</p>
      </header>

      <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        {conversation.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            영어로 대화를 시작해보세요.
          </div>
        ) : (
          <div className="space-y-4">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white ml-auto max-w-[80%]'
                    : 'bg-gray-300 dark:bg-gray-700 mr-auto max-w-[80%]'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="영어로 메시지를 입력하세요..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          전송
        </button>
      </form>
    </div>
  );
}

export default App;
