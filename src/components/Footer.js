import React from "react";

function Footer() {
  return (
    <footer className="text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Footer 제목 */}
        <h2 className="text-lg font-semibold mb-4">넷플릭스 대한민국</h2>

        {/* Footer 링크 섹션 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <a
            href="https://help.netflix.com/ko/node/412"
            className="hover:underline"
          >
            넷플릭스 소개
          </a>
          <a href="https://help.netflix.com/ko/" className="hover:underline">
            고객 센터
          </a>
          <a href="https://help.netflix.com/ko/" className="hover:underline">
            미디어 센터
          </a>
          <a
            href="https://help.netflix.com/legal/termsofuse"
            className="hover:underline"
          >
            이용약관
          </a>
          <a
            href="https://help.netflix.com/legal/privacy"
            className="hover:underline"
          >
            개인정보
          </a>
          <a
            href="https://help.netflix.com/legal/corpinfo"
            className="hover:underline"
          >
            회사정보
          </a>
          <a
            href="https://help.netflix.com/contactus"
            className="hover:underline"
          >
            문의하기
          </a>
          <a
            href="https://help.netflix.com/legal/notices"
            className="hover:underline"
          >
            법적 고지
          </a>
        </div>

        {/* Footer 설명 */}
        <p className="text-sm font-bold text-white text-center">
          © Netflix RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
