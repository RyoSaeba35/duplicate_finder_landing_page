import type { LegalContent } from "../legalTypes";
import en from "./en";

const ko: LegalContent = {
  ...en,
  backHome: "← 홈으로 돌아가기",
  authoritativeNotice:
    "이 문서는 영어로만 제공됩니다. 내용이 모호하거나 번역 오류가 있는 경우 영어 원문이 우선합니다.",
};

export default ko;
