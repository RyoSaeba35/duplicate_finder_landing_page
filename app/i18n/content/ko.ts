import type { LandingContent } from "../types";

const ko: LandingContent = {
  meta: {
    title: "Duplicate Finder — Windows에서 중복 파일 찾기 및 삭제",
    description: "폴더나 드라이브를 스캔하고, 중복 파일을 실시간 미리보기로 나란히 비교하고, 휴지통으로 안전하게 이동. 14일 무료 체험.",
  },
  nav: { howItWorks: "사용 방법", pricing: "가격", faq: "자주 묻는 질문", download: "다운로드" },
  hero: {
    eyebrow: "Windows용 · 14일 무료 체험 · 삭제는 €15 일회 결제",
    headlineLine1: "중복 파일을",
    headlineEm: "찾아보세요",
    sub: "폴더나 드라이브를 스캔하고 동일한 파일을 나란히 보여주며, 중복 파일을 휴지통으로 이동합니다 — 영구 삭제는 없습니다. 삭제 기능을 14일 동안 무료로 체험하세요. 계정 불필요.",
    ctaPrimary: "Windows용 다운로드",
    ctaStore: "Microsoft Store에서 받기",
    ctaSecondary: "사용 방법 보기",
    ctaNote: "14일 무료 체험 · 계정 없음 · 신용카드 없음 · €15 일회 결제로 영구 잠금 해제",
    securityNote: "첫 실행 시: Windows가 \"Windows가 PC를 보호했습니다\" 경고를 표시할 수 있습니다 — 이는 독립 개발자 앱에서 일반적인 현상입니다. 추가 정보 → 실행을 클릭하세요.",
    demoMeta: "동일한 파일 3개 · 각 158.3 KB",
    demoReclaimable: "158.3 KB 회수 가능",
    counterLabel: "이번 스캔에서 회수 가능",
    cardKeep: "보관",
    cardDuplicate: "중복",
    cardMarkForTrash: "휴지통으로 표시",
    cardOpenFile: "파일 열기 ↗",
    cardKeepInstead: "이 파일 대신 보관 →",
  },
  howItWorks: {
    eyebrow: "사용 방법",
    title: "3단계, 확인하기 전까지 영구적인 삭제는 없습니다.",
    steps: [
      { num: "01 — 스캔", title: "폴더, 드라이브 또는 전체 PC 선택", body: "모든 파일을 해시하여 정확한 일치 항목을 찾습니다. 모든 CPU 코어에 걸친 병렬 해싱으로 대용량 드라이브에서도 빠른 스캔." },
      { num: "02 — 비교", title: "두 복사본을 나란히 확인", body: "파일 크기, 수정 날짜, 이미지·PDF·Word·Excel 실시간 미리보기 — 결정하기 전에 모두 확인. 규칙에 따른 일괄 자동 선택으로 한 번에 처리." },
      { num: "03 — 회수", title: "하나 보관, 나머지 삭제", body: "중복 파일은 휴지통으로 이동 — 영구 삭제는 없습니다. 언제든지 마음을 바꿀 수 있습니다." },
    ],
  },
  features: {
    eyebrow: "주요 기능",
    title: "추측이 아닌, 실제로 중복을 찾습니다.",
    items: [
      { title: "바이트 단위 정확한 비교", body: "모든 파일을 해시하므로 이름이 바뀌거나 이동된 복사본도 감지." },
      { title: "실시간 미리보기", body: "이미지, PDF, Word 문서, Excel 시트, 코드 파일을 비교 화면에서 바로 렌더링." },
      { title: "사진가 모드", body: "사진 라이브러리 전용 탭 — RAW+JPEG 쌍을 감지하고 NEF, CR2, ARW, DNG 등의 내장 미리보기를 표시하며, Lightroom에서 관리하는 파일을 실수로 삭제되지 않도록 보호합니다." },
      { title: "휴지통을 통한 안전한 삭제", body: "모든 삭제는 Windows 휴지통을 통해 이루어집니다. 앱 자체는 영구적으로 아무것도 삭제하지 않습니다." },
      { title: "병렬 해싱 — 빠른 스캔", body: "SHA-256이 모든 CPU 코어에서 동시에 실행됩니다. 대용량 드라이브가 훨씬 빨리 완료됩니다." },
      { title: "규칙에 따른 일괄 자동 선택", body: "클릭 한 번으로 모든 중복 그룹에서 최신, 최고령, 최단 경로 복사본을 보관." },
      { title: "검색, 필터 및 정렬", body: "파일명이나 경로를 입력하면 수백 개의 그룹을 즉시 필터링. 크기, 이름, 날짜로 정렬." },
      { title: "CSV 보고서 내보내기", body: "모든 중복 그룹의 전체 스프레드시트 다운로드." },
      { title: "폴더 또는 전체 드라이브 스캔", body: "단일 다운로드 폴더부터 전체 C:\\ 드라이브까지, 원하는 범위로." },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "일회 결제 · 스캔은 영구 무료",
    list: [
      "폴더나 드라이브 스캔 — 무료, 영구적으로",
      "삭제 전 모든 중복 항목 확인",
      "€15 일회 결제로 삭제 잠금 해제 — 영구 라이선스",
      "구독 없음, 계정 불필요",
    ],
    ctaPrimary: "Windows용 다운로드",
    ctaSecondary: "라이선스 구매 →",
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "다운로드 전에",
    items: [
      { q: "실제로 필요한 파일을 삭제하지 않나요?", a: "명시적으로 표시한 파일만, 나란히 비교한 후에만 삭제됩니다. 파일 내용을 해시하여 일치 항목을 찾으므로 실제 바이트 단위 중복만 표시됩니다 — 모든 삭제는 휴지통으로 이동됩니다." },
      { q: "Mac 또는 Linux에서 작동하나요?", a: "아직은 — Duplicate Finder는 현재 Windows 전용입니다." },
      { q: "14일 체험 기간이 끝나면 어떻게 되나요?", a: "스캔은 무료로 유지됩니다 — 폴더를 스캔하고 모든 중복 파일을 비용 없이 영구적으로 확인할 수 있습니다. 체험 종료 후 삭제 기능이 잠깁니다. €15 일회 결제 라이선스로 삭제 기능을 영구적으로 잠금 해제할 수 있습니다." },
      { q: "설치 시 Windows가 경고를 표시하는 이유는 무엇인가요?", a: "아직 유료 코드 서명 인증서로 앱이 서명되지 않았기 때문입니다. '추가 정보'를 클릭한 후 '실행'을 클릭하세요. GitHub에서 소스 코드가 공개되어 있습니다." },
    ],
  },
  footer: { copyright: "Duplicate Finder.", changelog: "변경 이력", buy: "구매", privacy: "개인정보", terms: "이용약관" },
};

export default ko;
