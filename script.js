// ============================================
// 광동제약 AI센터 — 업무 생산성 핸즈온 가이드
// ============================================

const CATEGORIES = {
  gmail:    { name: "Gmail",            icon: "ri-mail-line",     color: "gmail" },
  drive:    { name: "Google Drive",     icon: "ri-drive-line",    color: "drive" },
  docs:     { name: "Docs / Sheets / Slides", icon: "ri-file-text-line",color: "docs" },
  calendar: { name: "Google Calendar",  icon: "ri-calendar-line", color: "calendar" },
  meet:     { name: "Google Meet",      icon: "ri-vidicon-line",  color: "meet" },
  slack:    { name: "Slack",            icon: "ri-slack-line",    color: "slack" },
};

// Image map: each category has a representative illustration
const TIP_IMAGES = {
  gmail: "images/gmail.svg",
  drive: "images/drive.svg",
  docs: "images/docs.svg",
  calendar: "images/calendar.svg",
  meet: "images/meet.svg",
  slack: "images/slack.svg",
};

const TIPS = [
  // ─── Gmail ───
  {
    category: "gmail",
    level: "빠른 정리",
    title: "별표와 보낸사람 기준으로 받은편지함 우선순위 만들기",
    desc: "자주 확인해야 하는 리더·고객 메일은 별표와 중요 표시를 같이 쓰면 기본 받은편지함에서 상단에 모입니다. 아침마다 전체를 읽기보다 중요 스레드부터 훑으세요.",
    scenario: "월요일 아침 출근하면 주말 동안 쌓인 메일이 80통인데, 임상시험 CRO에서 온 긴급 메일과 사내 공지를 한눈에 구분하고 싶을 때",
    context: "메일이 많아 우선순위를 놓치기 쉬울 때",
    shortcut: "Shift + I (읽음) / Shift + U (안읽음)",
    image: "images/gmail-labels-screenshot.png",
    deptTags: ["영업팀", "기획팀", "총무팀"],
  },
  {
    category: "gmail",
    level: "자동화",
    title: "필터로 알림 메일 자동 라벨링하고 보관하기",
    desc: "정기 보고서, 시스템 알림, 뉴스레터는 필터에서 보낸사람·제목 조건을 걸고 자동으로 라벨을 붙인 뒤 받은편지함을 건너뛰도록 설정하세요.",
    scenario: "SAP 시스템 알림, LIMS 분석결과 통보, 일일 생산 현황 자동 메일이 매일 30통씩 받은편지함을 채울 때",
    context: "반복적으로 들어오는 알림 메일을 줄이고 싶을 때",
    shortcut: "검색창 > 검색 옵션 > 필터 만들기",
    image: "images/gmail-filters-screenshot.png",
    deptTags: ["IT운영팀", "총무팀"],
  },
  {
    category: "gmail",
    level: "속도 향상",
    title: "키보드 단축키로 보관·답장·전달을 마우스 없이 처리",
    desc: "Gmail 설정에서 키보드 단축키를 켜면 e(보관), r(답장), a(전체답장), f(전달) 같은 기본 동작을 손에서 떼지 않고 처리할 수 있습니다.",
    scenario: "영업팀에서 거래처 문의 메일이 하루에 40통씩 오는데, 각각 확인 후 담당자에게 전달하거나 간단히 답장해야 할 때",
    context: "메일 처리량이 많은 실무자",
    shortcut: "e / r / a / f / # (삭제)",
    image: "images/gmail.svg",
    deptTags: ["영업팀", "총무팀", "기획팀"],
  },
  {
    category: "gmail",
    level: "검색",
    title: "고급 검색 연산자로 과거 메일 10초 안에 찾기",
    desc: "from:, has:attachment, older_than:, label: 조합만 익혀도 오래된 첨부파일 메일을 빠르게 찾을 수 있습니다. 사람·기간·첨부 여부로 좁히면 검색 성공률이 올라갑니다.",
    scenario: "6개월 전 식약처 담당자가 보낸 허가 관련 첨부파일을 급히 찾아야 하는데, 메일함에 수천 통이 쌓여있을 때",
    context: "지난 보고서나 첨부파일을 다시 찾아야 할 때",
    shortcut: "from:홍길동 has:attachment older_than:6m",
    image: "images/gmail-search-operators.png",
    deptTags: ["영업팀", "기획팀", "총무팀"],
  },
  {
    category: "gmail",
    level: "실수 방지",
    title: "보내기 취소 시간을 30초로 설정하기",
    desc: "설정 > 일반 > 보내기 취소에서 취소 가능 시간을 최대 30초로 설정하세요. 수신자 오류, 첨부 누락 같은 실수를 발송 직후에 잡을 수 있습니다.",
    scenario: "거래처 대표에게 보내는 견적서 메일에 첨부파일을 빼먹고 보내기를 눌러버렸을 때",
    context: "중요한 메일 발송 실수를 줄이고 싶을 때",
    shortcut: "Ctrl/Cmd + Z (발송 직후)",
    image: "images/gmail.svg",
    deptTags: ["영업팀", "기획팀", "총무팀"],
  },
  {
    category: "gmail",
    level: "템플릿",
    title: "자주 쓰는 답변을 템플릿으로 저장해 재사용하기",
    desc: "설정 > 고급 > 템플릿을 활성화하면 자주 보내는 정형 답변을 저장해 두고, 새 메일 작성 시 바로 불러올 수 있습니다. 답변 품질도 일정하게 유지됩니다.",
    scenario: "약국·병원에서 제품 규격, 보관 조건, 유통기한 문의가 매일 비슷한 형태로 들어올 때",
    context: "비슷한 내용의 메일을 반복해서 작성할 때",
    shortcut: "작성 > 더보기 > 템플릿",
    image: "images/gmail.svg",
    deptTags: ["영업팀", "총무팀", "마케팅팀"],
  },

  // ─── Google Drive ───
  {
    category: "drive",
    level: "공유",
    title: "링크 공유 전 권한 수준을 반드시 점검하기",
    desc: "'보기 가능', '댓글 가능', '편집 가능'을 목적에 맞게 구분하세요. 초안 검토는 댓글 권한만, 최종 협업에서만 편집 권한을 넓히는 것이 안전합니다. '링크가 있는 모든 사용자'로 열 때는 특히 주의하세요.",
    scenario: "신제품 출시 기획안을 마케팅팀과 공유하되, 영업전략 부분은 수정 못하게 댓글만 허용하고 싶을 때",
    context: "파일 공유 후 원치 않는 수정이 자주 생길 때",
    shortcut: "파일 우클릭 > 공유",
    image: "images/drive-sharing-dialog.png",
    deptTags: ["총무팀", "IT운영팀"],
  },
  {
    category: "drive",
    level: "정리",
    title: "공유 드라이브와 내 드라이브를 역할별로 분리하기",
    desc: "팀 기준 문서와 운영 템플릿은 공유 드라이브에, 개인 실험 자료나 임시 초안은 내 드라이브에 두면 찾기가 쉬워집니다. 공유 드라이브는 소유권이 조직에 귀속되어 퇴사 시에도 파일이 유지됩니다.",
    scenario: "GMP 문서, SOP, 밸리데이션 보고서는 품질팀 공유 드라이브에, 개인 분석 메모는 내 드라이브에 분리해서 관리하고 싶을 때",
    context: "문서 위치가 팀마다 들쭉날쭉할 때",
    shortcut: "왼쪽 메뉴 > 공유 드라이브",
    image: "images/drive.svg",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "drive",
    level: "검색",
    title: "Drive 검색 연산자로 파일을 10초 안에 찾기",
    desc: "type:, owner:, before:, after:, title: 같은 검색 연산자를 조합하면 같은 이름의 파일이 많을 때도 정확하게 찾을 수 있습니다. 예: type:spreadsheet owner:me after:2025-01-01로 올해 내가 만든 스프레드시트만 필터링.",
    scenario: "올해 1분기에 연구소에서 만든 안정성 시험 보고서를 찾아야 하는데, '보고서'로 검색하면 수백 개가 나올 때",
    context: "동일한 이름의 파일이 많아 헷갈릴 때",
    shortcut: "type:document / owner:이름 / before:날짜",
    image: "images/drive-search-screenshot.png",
    deptTags: ["기획팀", "영업팀", "총무팀"],
  },
  {
    category: "drive",
    level: "운영",
    title: "폴더 색상과 별표로 핵심 폴더를 시각적으로 구분하기",
    desc: "폴더를 우클릭해 색상을 지정하면 시각적으로 바로 구분됩니다. 진행 중인 프로젝트는 빨강, 참고용 자료는 파랑처럼 팀 규칙을 정하세요. 별표를 함께 쓰면 좌측 '중요' 메뉴에서도 바로 접근 가능합니다.",
    scenario: "임상 1상, 2상, 3상 폴더와 허가 서류, 생산 기록 폴더가 한 화면에 섞여 있어 구분이 안 될 때",
    context: "자주 드나드는 프로젝트 폴더가 많을 때",
    shortcut: "폴더 우클릭 > 색상 변경 / s (별표 토글)",
    image: "images/drive.svg",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "drive",
    level: "협업",
    title: "버전 기록으로 이전 상태 복원하기",
    desc: "파일을 열고 '파일 > 버전 기록 > 버전 기록 보기'를 사용하면 과거 시점으로 되돌리거나 변경 내역을 확인할 수 있습니다. 특정 버전에 이름을 붙여두면(예: 'v2 최종') 나중에 훨씬 찾기 쉽습니다.",
    scenario: "여러 팀이 동시에 편집하던 의약품 허가신청서에서 누군가 핵심 데이터를 실수로 지웠을 때",
    context: "실수로 중요한 내용을 삭제했을 때",
    shortcut: "Ctrl/Cmd + Alt + Shift + H",
    image: "images/drive.svg",
    deptTags: ["기획팀", "총무팀", "IT운영팀"],
  },
  {
    category: "drive",
    level: "오프라인",
    title: "오프라인 모드를 미리 설정해 인터넷 없이 작업하기",
    desc: "Drive 설정에서 오프라인 모드를 켜면 인터넷이 끊겨도 최근 파일을 열고 편집할 수 있습니다. Chrome 브라우저에서만 지원되며, 출장이나 이동 중에도 작업이 끊기지 않습니다. 온라인 복귀 시 자동 동기화됩니다.",
    scenario: "제약 공장 현장 실사 중 Wi-Fi가 불안정한데, GMP 점검 체크리스트를 계속 작성해야 할 때",
    context: "인터넷이 불안정한 환경에서 작업할 때",
    shortcut: "설정 > 오프라인 > 활성화",
    image: "images/drive.svg",
    deptTags: ["영업팀", "기획팀"],
  },
  {
    category: "drive",
    level: "정리",
    title: "바로가기(Shortcut)로 파일 복사 없이 여러 위치에서 접근하기",
    desc: "같은 파일을 여러 폴더에 넣고 싶을 때 복사하면 버전이 꼬입니다. 대신 바로가기를 만들면 원본 하나를 여러 경로에서 참조할 수 있어 항상 최신 상태가 유지됩니다.",
    scenario: "동일한 원료 규격서를 연구소, 품질팀, 생산팀 폴더 모두에서 참조해야 하는데, 복사하면 버전이 꼬일 때",
    context: "하나의 파일을 여러 프로젝트에서 참조해야 할 때",
    shortcut: "Shift + Z (바로가기 추가)",
    image: "images/drive.svg",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "drive",
    level: "저장공간",
    title: "저장공간을 차지하는 대용량 파일 정리하기",
    desc: "drive.google.com/settings에서 저장공간 현황을 확인하고, Drive에서 '저장용량' 정렬로 큰 파일부터 정리하세요. 휴지통도 저장공간을 차지하므로 정기적으로 비워야 합니다.",
    scenario: "연구소에서 HPLC 분석 데이터, 현미경 이미지 등 대용량 파일을 계속 올렸더니 부서 저장공간이 90% 찼을 때",
    context: "Google Workspace 저장공간이 부족할 때",
    shortcut: "Drive > 저장용량 클릭 > 크기순 정렬",
    image: "images/drive.svg",
    deptTags: ["IT운영팀", "총무팀"],
  },
  {
    category: "drive",
    level: "동기화",
    title: "Google Drive for Desktop으로 로컬 폴더와 동기화하기",
    desc: "Drive for Desktop 앱을 설치하면 탐색기(Finder)에서 Drive 파일을 바로 열고 편집할 수 있습니다. 스트리밍 모드는 공간을 아끼고, 미러링 모드는 오프라인 접근을 보장합니다.",
    scenario: "분석 장비에서 추출한 데이터를 매번 브라우저에 업로드하지 않고, 로컬 폴더에 넣으면 자동으로 Drive에 올라가게 하고 싶을 때",
    context: "브라우저 없이 로컬에서 Drive 파일을 작업하고 싶을 때",
    shortcut: "시스템 트레이 > Drive 아이콘 > 설정",
    image: "images/drive.svg",
    deptTags: ["IT운영팀", "AI센터"],
  },
  {
    category: "drive",
    level: "생산성",
    title: "우선순위 페이지(Workspaces)로 프로젝트별 파일 모아보기",
    desc: "Drive 좌측 메뉴의 '우선순위'에서 작업 공간을 만들면 여러 위치에 흩어진 파일을 프로젝트 단위로 모아볼 수 있습니다. 폴더 구조를 바꾸지 않고도 맥락별 뷰를 구성할 수 있어 편리합니다.",
    scenario: "신약 A 프로젝트 관련 파일이 연구소, 임상팀, 인허가팀 폴더에 흩어져 있어 한눈에 모아보고 싶을 때",
    context: "여러 폴더에 걸친 프로젝트 파일을 한눈에 보고 싶을 때",
    shortcut: "Drive > 우선순위 > 새 작업 공간",
    image: "images/drive.svg",
    deptTags: ["기획팀", "전략기획팀"],
  },
  {
    category: "drive",
    level: "템플릿",
    title: "팀 템플릿을 공유 드라이브에 만들어 재사용하기",
    desc: "보고서, 기획서, 회의록 양식을 공유 드라이브 '템플릿' 폴더에 모아두세요. 새 문서 시작 시 '사본 만들기'로 가져오면 서식과 구조가 통일됩니다. Docs/Sheets/Slides 각각의 템플릿 갤러리도 활용하세요.",
    scenario: "임상시험 프로토콜, 이상반응 보고서, 주간업무보고 양식이 팀원마다 다른 형식으로 작성되고 있을 때",
    context: "부서마다 문서 양식이 달라 혼란스러울 때",
    shortcut: "파일 우클릭 > 사본 만들기",
    image: "images/drive.svg",
    deptTags: ["총무팀", "기획팀"],
  },
  {
    category: "drive",
    level: "보안",
    title: "파일 공유 만료일과 다운로드 제한 설정하기",
    desc: "외부 공유 시 '공유 > 고급 > 만료일 추가'로 접근 기한을 설정하고, '뷰어와 댓글 작성자의 다운로드, 인쇄, 복사 옵션 사용 중지'를 체크하면 민감 자료 유출 위험을 줄일 수 있습니다.",
    scenario: "CRO 업체에 임상 데이터를 3개월간만 열람하게 공유하고, 기간 후 자동으로 접근을 차단하고 싶을 때",
    context: "외부 파트너에게 임시로 파일을 공유해야 할 때",
    shortcut: "공유 > 설정(톱니바퀴) > 옵션 제한",
    image: "images/drive.svg",
    deptTags: ["총무팀", "IT운영팀"],
  },
  {
    category: "drive",
    level: "감사",
    title: "Drive 활동 패널로 파일 열람·수정 이력 확인하기",
    desc: "파일을 선택하고 우측 패널의 '활동' 탭을 열면 누가 언제 파일을 열고, 수정하고, 공유했는지 확인할 수 있습니다. 민감한 문서의 접근 기록을 모니터링할 때 유용합니다.",
    scenario: "식약처 제출용 허가 문서를 누가 마지막에 수정했는지, 최종본이 맞는지 확인해야 할 때",
    context: "공유한 파일을 누가 확인했는지 알고 싶을 때",
    shortcut: "파일 선택 > 우측 패널 > 활동(i)",
    image: "images/drive.svg",
    deptTags: ["총무팀", "IT운영팀"],
  },
  {
    category: "drive",
    level: "연동",
    title: "서드파티 앱과 Drive 연동해서 기능 확장하기",
    desc: "파일을 우클릭하면 '연결 앱'에서 Lucidchart, DocuSign, Notion 등 다양한 앱으로 직접 열 수 있습니다. '새로 만들기 > 더보기 > 앱 연결'에서 자주 쓰는 앱을 추가하세요.",
    context: "Google 기본 앱만으로는 기능이 부족할 때",
    shortcut: "우클릭 > 연결 앱 / 새로 만들기 > 더보기",
    image: "images/drive.svg",
    scenario: "프로세스 순서도를 그려야 하는데 Docs로는 한계가 있습니다. Drive에서 파일 우클릭 > 연결 앱 > Lucidchart를 선택하면 브라우저에서 바로 다이어그램을 그리고, 결과물이 Drive에 자동 저장됩니다.",
    deptTags: ["IT운영팀", "디자인팀", "AI센터"],
  },
  {
    category: "drive",
    level: "빠른 접근",
    title: "빠른 액세스와 추천 파일로 최근 작업 이어가기",
    desc: "Drive 홈 화면 상단의 '빠른 액세스'는 최근 활동과 협업 패턴을 분석해 필요할 파일을 자동 추천합니다. 매번 폴더를 탐색하지 않아도 바로 이어 작업할 수 있습니다.",
    context: "어제 작업하던 파일을 빠르게 다시 열고 싶을 때",
    shortcut: "Drive 홈 > 추천 파일 영역",
    image: "images/drive.svg",
    scenario: "아침에 출근해서 어제 작업하던 스프레드시트를 열려는데 폴더 경로가 기억나지 않습니다. Drive 홈만 열면 빠른 액세스에 어제 편집하던 파일이 바로 나와서, 클릭 한 번으로 이어서 작업할 수 있습니다.",
    deptTags: ["기획팀", "영업팀"],
  },

  // ─── Docs / Sheets / Slides ───
  // — Docs —
  {
    category: "docs",
    level: "협업",
    title: "제안 모드로 수정 이력을 남기면서 리뷰받기",
    desc: "문서를 직접 덮어쓰기보다 제안 모드에서 수정하면 승인 전후 차이를 명확히 보여줄 수 있습니다. 팀장 검토나 타부서 협업에 유용합니다. 우측 상단의 편집 모드 드롭다운에서 '제안' 선택.",
    context: "결재 전 문안을 검토받아야 할 때",
    shortcut: "Ctrl/Cmd + Alt + Shift + A",
    image: "images/docs.svg",
    scenario: "보도자료 초안을 팀장에게 검토 요청했더니 직접 편집해서 원본이 뭐가 바뀌었는지 모릅니다. 제안 모드로 전환해달라고 하면 수정 제안이 색깔로 표시되어, 승인/거부를 하나씩 선택할 수 있습니다.",
    deptTags: ["기획팀", "마케팅팀"],
  },
  {
    category: "docs",
    level: "구조화",
    title: "제목 스타일과 개요(Outline)로 긴 문서 탐색 쉽게 하기",
    desc: "제목 1, 제목 2, 제목 3 스타일을 활용하면 좌측 '개요' 패널에 문서 구조가 자동 생성됩니다. 클릭 한 번으로 원하는 섹션으로 이동할 수 있어 10쪽 이상 문서에서 필수입니다.",
    context: "긴 문서에서 원하는 부분을 빠르게 찾고 싶을 때",
    shortcut: "Ctrl/Cmd + Alt + 1~6 (제목 레벨)",
    image: "images/docs.svg",
    scenario: "30페이지짜리 정책 문서에서 '보안 정책' 섹션을 찾으려고 스크롤하고 있습니다. 제목 스타일을 적용해뒀다면 좌측 개요 패널에서 '보안 정책'을 클릭만 하면 바로 이동합니다.",
    deptTags: ["기획팀", "전략기획팀"],
  },
  {
    category: "docs",
    level: "생산성",
    title: "문서 템플릿으로 반복 초안 빠르게 시작하기",
    desc: "주간보고, 회의록, 실험노트처럼 반복되는 문서는 제목 구조와 체크리스트를 템플릿으로 저장해 두세요. 빈 문서에서 형식을 고민하는 시간을 줄입니다.",
    context: "비슷한 문서를 자주 새로 만들어야 할 때",
    shortcut: "docs.google.com > 템플릿 갤러리",
    image: "images/docs.svg",
    scenario: "매주 금요일 주간보고를 쓸 때마다 표를 새로 그리고 항목을 정리하는 데만 15분씩 걸립니다. 표·체크리스트가 포함된 템플릿을 만들어두면 '사본 만들기' 후 내용만 채워 5분 만에 완성됩니다.",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "docs",
    level: "입력",
    title: "음성 입력(Voice Typing)으로 빠르게 초안 잡기",
    desc: "도구 > 음성 입력을 켜면 마이크로 말하는 내용이 실시간으로 텍스트로 변환됩니다. 한국어도 지원되며, 브레인스토밍이나 긴 글 초안을 잡을 때 타이핑보다 훨씬 빠릅니다.",
    context: "타이핑이 번거롭거나 아이디어를 빠르게 쏟아내고 싶을 때",
    shortcut: "Ctrl/Cmd + Shift + S (음성 입력)",
    image: "images/docs.svg",
    scenario: "브레인스토밍 회의 직후 아이디어가 10개나 쏟아져 나왔는데 타이핑하려니 까먹을 것 같습니다. Ctrl+Shift+S로 음성 입력을 켜고 말로 쭉 풀어놓으면, 나중에 정리만 하면 되니까 아이디어 유실이 없습니다.",
    deptTags: ["기획팀", "마케팅팀", "AI센터"],
  },
  {
    category: "docs",
    level: "레이아웃",
    title: "페이지 없는 형식(Pageless)으로 스크롤 문서 만들기",
    desc: "파일 > 페이지 설정 > 페이지 없음을 선택하면 페이지 구분 없이 끊김 없는 스크롤 문서가 됩니다. 내부 위키나 기술 문서처럼 인쇄가 필요 없는 문서에 적합합니다.",
    context: "페이지 나눔이 불필요한 온라인 전용 문서를 작성할 때",
    shortcut: "파일 > 페이지 설정 > 페이지 없음",
    image: "images/docs.svg",
    scenario: "팀 내부 기술 문서를 Docs로 작성하는데 페이지 경계에서 표가 잘리고 레이아웃이 깨집니다. 파일 > 페이지 설정 > 페이지 없음으로 바꾸면 끊김 없는 스크롤 문서가 되어 웹 문서처럼 편하게 읽힙니다.",
    deptTags: ["IT운영팀", "AI센터"],
  },
  {
    category: "docs",
    level: "자동화",
    title: "목차(Table of Contents) 자동 생성으로 문서 탐색 돕기",
    desc: "제목 스타일을 적용한 뒤 삽입 > 목차를 선택하면 클릭 가능한 목차가 자동 생성됩니다. 문서 내용이 바뀌면 목차를 클릭해 '업데이트'만 누르면 됩니다.",
    context: "보고서나 매뉴얼에 목차를 넣어야 할 때",
    shortcut: "삽입 > 목차",
    image: "images/docs.svg",
    scenario: "20페이지짜리 운영 매뉴얼을 만들었는데 수신자가 '3장 비상연락처가 어디 있어요?'라고 물어봅니다. 삽입 > 목차로 클릭 가능한 목차를 넣어두면, 누구나 원하는 섹션으로 바로 점프할 수 있습니다.",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "docs",
    level: "비교",
    title: "문서 비교 기능으로 두 버전의 차이 한눈에 보기",
    desc: "도구 > 문서 비교를 선택하면 두 개의 Google Docs를 나란히 비교해 변경된 부분을 하이라이트로 보여줍니다. 계약서 수정본이나 정책 변경 검토에 매우 유용합니다.",
    context: "수정 전후 문서의 차이를 명확히 파악해야 할 때",
    shortcut: "도구 > 문서 비교",
    image: "images/docs.svg",
    scenario: "법무팀에서 수정한 계약서가 돌아왔는데 어디가 바뀌었는지 한 줄씩 대조하려면 한 시간이 걸립니다. 도구 > 문서 비교로 원본과 수정본을 넣으면 변경된 부분이 하이라이트되어 5분 만에 검토 끝납니다.",
    deptTags: ["기획팀", "전략기획팀"],
  },
  {
    category: "docs",
    level: "확장",
    title: "부가기능(Add-ons)으로 Docs 기능 확장하기",
    desc: "확장 프로그램 > 부가기능 > 부가기능 설치에서 수식 편집기, 번역기, 다이어그램 도구 등을 추가할 수 있습니다. 'Lucidchart Diagrams'로 순서도를, 'Translate+'로 번역을 바로 삽입하세요.",
    context: "Docs 기본 기능만으로는 부족할 때",
    shortcut: "확장 프로그램 > 부가기능",
    image: "images/docs.svg",
    scenario: "기획 문서에 프로세스 순서도를 넣어야 하는데 Docs 기본 그리기 도구로는 한계가 있습니다. 부가기능에서 Lucidchart를 설치하면 전문적인 다이어그램을 그려서 문서에 바로 삽입할 수 있습니다.",
    deptTags: ["IT운영팀", "기획팀"],
  },
  {
    category: "docs",
    level: "협업",
    title: "댓글과 @멘션으로 담당자에게 바로 알리기",
    desc: "문서에서 특정 내용에 댓글을 달고 @으로 담당자를 태그하면 이메일 알림이 자동으로 갑니다. 별도 메신저 없이 맥락 안에서 피드백을 주고받을 수 있습니다.",
    context: "문서 피드백을 빠르게 주고받아야 할 때",
    shortcut: "Ctrl/Cmd + Alt + M (댓글 삽입)",
    image: "images/docs.svg",
    scenario: "기획서에서 '예산 부분 재확인 필요'라는 피드백을 Slack으로 따로 보내면 맥락이 끊깁니다. 해당 문단에 바로 댓글을 달고 @재무팀장을 태그하면, 이메일 알림과 함께 정확한 위치에서 논의가 시작됩니다.",
    deptTags: ["기획팀", "마케팅팀"],
  },
  {
    category: "docs",
    level: "단축키",
    title: "Docs 핵심 단축키 5가지로 편집 속도 높이기",
    desc: "복사/붙여넣기 외에도 서식 복사(Ctrl+Alt+C → Ctrl+Alt+V), 링크 삽입(Ctrl+K), 단어 선택(Ctrl+Shift+방향키)을 익히면 마우스 없이 빠르게 편집 가능합니다.",
    context: "마우스에 손이 자주 가서 편집이 느릴 때",
    shortcut: "Ctrl+K / Ctrl+Alt+C → Ctrl+Alt+V",
    image: "images/docs.svg",
    scenario: "보고서에서 제목 서식을 20개 항목에 똑같이 적용해야 합니다. 하나를 꾸민 뒤 Ctrl+Alt+C로 서식 복사, 다음 항목 선택 후 Ctrl+Alt+V로 붙여넣기를 반복하면 일일이 굵기·크기·색상을 맞출 필요 없이 1분 만에 끝납니다.",
    deptTags: ["기획팀", "마케팅팀", "총무팀"],
  },
  // — Sheets —
  {
    category: "docs",
    level: "데이터",
    title: "VLOOKUP과 INDEX/MATCH로 시트 간 데이터 연결하기",
    desc: "VLOOKUP은 기준값으로 다른 범위의 데이터를 가져오는 기본 함수입니다. 더 유연한 INDEX/MATCH 조합은 왼쪽 열 참조도 가능하고, 열 삽입에도 깨지지 않아 실무에서 더 권장됩니다.",
    context: "여러 시트의 데이터를 하나로 합쳐야 할 때",
    shortcut: "=VLOOKUP() / =INDEX(MATCH())",
    image: "images/docs.svg",
    scenario: "인사팀 시트에는 사번과 이름이, 급여 시트에는 사번과 금액이 있습니다. 급여 시트에서 =INDEX(인사!B:B, MATCH(A2, 인사!A:A, 0))을 쓰면 사번 기준으로 이름이 자동으로 채워져서 수작업 매칭이 필요 없습니다.",
    deptTags: ["기획팀", "전략기획팀", "영업팀"],
  },
  {
    category: "docs",
    level: "데이터",
    title: "ARRAYFORMULA로 수천 행에 수식 한 번에 적용하기",
    desc: "한 셀에 =ARRAYFORMULA(B2:B*C2:C)처럼 입력하면 모든 행에 수식이 자동 적용됩니다. 행을 추가할 때마다 수식을 복사할 필요가 없어 유지보수가 편하고 실수도 줄어듭니다.",
    context: "매번 수식을 아래로 드래그하는 게 번거로울 때",
    shortcut: "=ARRAYFORMULA(수식범위)",
    image: "images/docs.svg",
    scenario: "매출 시트에 매일 새 행이 추가되는데, 수량×단가 수식을 매번 아래로 드래그하고 있습니다. 첫 셀에 =ARRAYFORMULA(B2:B*C2:C)만 넣으면 새 행이 추가될 때마다 자동으로 계산됩니다.",
    deptTags: ["전략기획팀", "영업팀"],
  },
  {
    category: "docs",
    level: "데이터",
    title: "QUERY 함수로 SQL처럼 데이터 추출하기",
    desc: "=QUERY(데이터범위, \"SELECT A, SUM(C) WHERE B='영업부' GROUP BY A\")처럼 SQL과 유사한 문법으로 데이터를 필터링, 그룹핑, 정렬할 수 있습니다. 피벗 테이블 없이도 강력한 보고서를 만들 수 있습니다.",
    context: "하나의 원본으로 여러 조건의 보고서를 만들어야 할 때",
    shortcut: "=QUERY(범위, \"SELECT ... WHERE ...\")",
    image: "images/docs.svg",
    scenario: "전체 매출 데이터에서 영업부의 이번 분기 실적만 뽑아야 합니다. =QUERY(데이터!A:E, \"SELECT A, SUM(E) WHERE B='영업부' GROUP BY A\")로 피벗 테이블 없이 원하는 보고서를 바로 만들 수 있습니다.",
    deptTags: ["전략기획팀", "영업팀", "AI센터"],
  },
  {
    category: "docs",
    level: "분석",
    title: "피벗 테이블로 대량 데이터를 요약·분석하기",
    desc: "데이터 범위를 선택하고 삽입 > 피벗 테이블을 만들면 드래그 앤 드롭으로 행·열·값·필터를 구성해 데이터를 다양한 관점에서 분석할 수 있습니다. 매출, 인원, 실적 등 정기 보고에 필수입니다.",
    context: "수천 건의 데이터를 부서별·기간별로 요약해야 할 때",
    shortcut: "삽입 > 피벗 테이블",
    image: "images/docs.svg",
    scenario: "3,000건의 주문 데이터에서 지역별·제품별 매출 현황을 임원 보고용으로 정리해야 합니다. 삽입 > 피벗 테이블에서 행에 지역, 열에 제품, 값에 매출 합계를 넣으면 2분 만에 크로스탭 요약표가 완성됩니다.",
    deptTags: ["기획팀", "전략기획팀", "영업팀"],
  },
  {
    category: "docs",
    level: "시각화",
    title: "조건부 서식으로 데이터를 시각적으로 강조하기",
    desc: "서식 > 조건부 서식에서 규칙을 설정하면 특정 조건에 따라 셀 색상이 자동 변경됩니다. 예: 매출 목표 미달은 빨간색, 달성은 초록색. 색상 스케일로 그라데이션 효과도 가능합니다.",
    context: "숫자 데이터에서 패턴이나 이상값을 빠르게 파악하고 싶을 때",
    shortcut: "서식 > 조건부 서식",
    image: "images/docs.svg",
    scenario: "월별 KPI 시트에서 목표 미달 항목을 하나씩 눈으로 찾고 있습니다. 조건부 서식에서 '값이 100 미만이면 빨간 배경' 규칙을 넣으면, 미달 항목이 빨간색으로 자동 표시되어 한눈에 파악됩니다.",
    deptTags: ["전략기획팀", "영업팀", "기획팀"],
  },
  {
    category: "docs",
    level: "데이터 정합",
    title: "데이터 유효성 검사로 잘못된 입력 방지하기",
    desc: "데이터 > 데이터 유효성 검사에서 드롭다운 목록, 숫자 범위, 날짜 형식 등을 지정하면 팀원이 정해진 형식으로만 입력할 수 있습니다. 오타나 형식 오류를 원천 차단합니다.",
    context: "공유 시트에 잘못된 형식의 데이터가 자주 입력될 때",
    shortcut: "데이터 > 데이터 유효성 검사",
    image: "images/docs.svg",
    scenario: "공용 재고 시트에 팀원들이 수량을 입력하는데, '10개'나 '약 10' 같은 문자가 섞여서 합계 수식이 깨집니다. 데이터 유효성 검사에서 '숫자만' 조건을 걸면 문자 입력 자체가 차단됩니다.",
    deptTags: ["IT운영팀", "총무팀"],
  },
  {
    category: "docs",
    level: "정리",
    title: "이름이 지정된 범위(Named Ranges)로 수식 가독성 높이기",
    desc: "데이터 > 이름이 지정된 범위에서 범위에 이름을 붙이면 수식에서 =SUM(A2:A100) 대신 =SUM(매출데이터)처럼 쓸 수 있습니다. 복잡한 시트에서 수식 이해와 유지보수가 훨씬 쉬워집니다.",
    context: "복잡한 수식이 많아 관리가 어려울 때",
    shortcut: "데이터 > 이름이 지정된 범위",
    image: "images/docs.svg",
    scenario: "복잡한 예산 시트에서 =SUM(B2:B100)*C5/D10 같은 수식이 있으면 나중에 뭐가 뭔지 모릅니다. 범위에 '월매출', '세율', '할인율'이라고 이름을 붙이면 =SUM(월매출)*세율/할인율로 읽혀서 누구나 이해할 수 있습니다.",
    deptTags: ["전략기획팀", "기획팀"],
  },
  {
    category: "docs",
    level: "속도 향상",
    title: "필터 보기로 팀원마다 다른 조건을 안전하게 적용하기",
    desc: "공용 시트에서 필터를 직접 바꾸면 다른 사람 화면도 흔들립니다. 필터 보기를 사용하면 각자 원하는 조건으로 보면서 원본 정렬을 유지합니다. 필터 보기에 이름을 붙이면 나중에 재사용도 가능합니다.",
    context: "여러 명이 동시에 보는 시트에서 정렬 충돌이 날 때",
    shortcut: "데이터 > 필터 보기 만들기",
    image: "images/docs.svg",
    scenario: "영업팀 5명이 같은 고객 시트를 보는데, 한 명이 필터로 서울 지역만 걸면 다른 사람 화면에서도 서울만 보입니다. 필터 보기를 쓰면 각자 원하는 지역만 필터링하면서 다른 사람 화면은 영향받지 않습니다.",
    deptTags: ["영업팀", "기획팀"],
  },
  {
    category: "docs",
    level: "연동",
    title: "IMPORTRANGE로 다른 스프레드시트 데이터 실시간 연결하기",
    desc: "=IMPORTRANGE(\"스프레드시트URL\", \"시트명!A:C\")로 다른 파일의 데이터를 실시간으로 가져올 수 있습니다. 부서별 시트를 하나의 종합 대시보드로 합칠 때 유용합니다. 최초 한 번 접근 허용이 필요합니다.",
    context: "여러 부서의 스프레드시트를 하나로 취합해야 할 때",
    shortcut: "=IMPORTRANGE(\"URL\", \"범위\")",
    image: "images/docs.svg",
    scenario: "5개 지역 영업소가 각자 스프레드시트에 매출을 입력하고 있습니다. 본사 종합 시트에서 =IMPORTRANGE로 각 영업소 시트를 연결하면, 영업소가 데이터를 수정할 때마다 종합 대시보드에 실시간 반영됩니다.",
    deptTags: ["전략기획팀", "영업팀"],
  },
  {
    category: "docs",
    level: "자동화",
    title: "매크로로 반복 작업을 녹화해서 자동화하기",
    desc: "확장 프로그램 > 매크로 > 매크로 녹화를 시작하면 이후 수행하는 모든 조작이 기록됩니다. 저장 후 단축키로 실행하면 매번 같은 서식 작업이나 데이터 정리를 자동으로 처리할 수 있습니다.",
    context: "매주 같은 데이터 정리 작업을 반복할 때",
    shortcut: "확장 프로그램 > 매크로 > 매크로 녹화",
    image: "images/docs.svg",
    scenario: "매주 월요일 원본 데이터를 복사 → 빈 행 삭제 → 헤더 서식 적용 → 특정 열 숨기기를 반복하고 있습니다. 매크로 녹화를 시작하고 한 번만 수행하면, 다음 주부터는 단축키 한 번으로 전체 과정이 자동 실행됩니다.",
    deptTags: ["IT운영팀", "전략기획팀"],
  },
  {
    category: "docs",
    level: "시각화",
    title: "스파크라인(Sparkline)으로 셀 안에 미니 차트 넣기",
    desc: "=SPARKLINE(B2:M2)를 입력하면 셀 안에 소형 꺾은선 그래프가 나타납니다. 대시보드에서 추세를 한눈에 보여줄 때 유용합니다. 막대형, 승패형 등 다양한 옵션을 지원합니다.",
    context: "표 안에 추세를 시각적으로 함께 보여주고 싶을 때",
    shortcut: "=SPARKLINE(데이터범위, {옵션})",
    image: "images/docs.svg",
    scenario: "월별 매출 요약 표에서 숫자만 나열하면 추세가 안 보입니다. 각 행 끝에 =SPARKLINE(B2:M2)를 넣으면 12개월 추이가 미니 그래프로 표시되어, 별도 차트 없이도 어떤 제품이 성장 중인지 바로 보입니다.",
    deptTags: ["전략기획팀", "영업팀"],
  },
  // — Slides —
  {
    category: "docs",
    level: "디자인",
    title: "마스터 슬라이드로 프레젠테이션 디자인 통일하기",
    desc: "슬라이드 > 테마 편집에서 마스터 슬라이드를 수정하면 모든 슬라이드에 일관된 로고, 색상, 폰트가 자동 적용됩니다. 발표 자료의 전문성이 크게 올라가고, 디자인 수정 시간도 대폭 줄어듭니다.",
    context: "발표 자료의 디자인을 일관되게 유지하고 싶을 때",
    shortcut: "슬라이드 > 테마 편집",
    image: "images/docs.svg",
    scenario: "발표 자료 40장을 만들었는데 로고 위치가 슬라이드마다 다르고 폰트도 제각각입니다. 마스터 슬라이드에서 로고 위치와 폰트를 한 번만 설정하면 전체 슬라이드에 자동 적용되어 수작업 교정이 필요 없습니다.",
    deptTags: ["마케팅팀", "기획팀", "디자인팀"],
  },
  {
    category: "docs",
    level: "발표",
    title: "발표자 노트와 발표자 보기로 프로처럼 발표하기",
    desc: "각 슬라이드 하단에 발표자 노트를 작성하고, 발표 시 '발표자 보기'를 선택하면 청중에게는 슬라이드만, 발표자에게는 노트·타이머·다음 슬라이드가 보입니다. 레이저 포인터(L키)도 활용하세요.",
    context: "발표 중 내용을 잊거나 시간 관리가 어려울 때",
    shortcut: "Ctrl/Cmd + Shift + Enter (발표자 보기)",
    image: "images/docs.svg",
    scenario: "임원 발표 중에 다음 슬라이드 내용이 기억나지 않아 당황한 적이 있습니다. 발표자 보기를 켜면 청중 화면에는 현재 슬라이드만 보이고, 내 화면에는 발표 노트와 다음 슬라이드가 함께 나와서 자연스럽게 진행할 수 있습니다.",
    deptTags: ["기획팀", "영업팀", "마케팅팀"],
  },
  {
    category: "docs",
    level: "멀티미디어",
    title: "Slides에 영상·오디오를 삽입해 풍성한 발표 만들기",
    desc: "삽입 > 동영상에서 YouTube 링크나 Drive 영상을 바로 넣을 수 있습니다. 시작·종료 시간을 지정해 필요한 부분만 재생하세요. 자동 재생 설정으로 슬라이드 전환 시 바로 재생되게 할 수도 있습니다.",
    context: "제품 데모나 교육 자료에 영상을 포함하고 싶을 때",
    shortcut: "삽입 > 동영상",
    image: "images/docs.svg",
    scenario: "신제품 발표에서 3분짜리 데모 영상을 보여줘야 합니다. 삽입 > 동영상에서 Drive에 올린 영상을 넣고 시작 시간을 0:30, 종료를 2:15로 설정하면, 핵심 장면만 자동 재생되어 발표 흐름이 끊기지 않습니다.",
    deptTags: ["마케팅팀", "영업팀"],
  },
  {
    category: "docs",
    level: "협업",
    title: "Slides에서 실시간 질문(Q&A) 세션 활용하기",
    desc: "발표 중 도구 > Q&A 기록을 시작하면 청중이 별도 링크에서 질문을 제출하고 투표할 수 있습니다. 발표자는 인기 질문 순으로 확인할 수 있어 대규모 발표에서 효율적인 Q&A가 가능합니다.",
    context: "대규모 발표에서 질문을 효율적으로 관리하고 싶을 때",
    shortcut: "발표 중 > 도구 > Q&A 기록",
    image: "images/docs.svg",
    deptTags: ["기획팀", "마케팅팀", "AI센터"],
  },

  // ─── 공동 작업 & 버전 관리 심화 ───
  {
    category: "docs",
    level: "공동 작업",
    title: "동시 편집 시 커서 충돌 방지 — 섹션 분담 전략",
    desc: "여러 명이 같은 문서를 동시에 편집할 때는 제목 스타일로 섹션을 나누고, 각자 담당 섹션만 편집하세요. 같은 줄을 동시에 수정하면 의도치 않은 덮어쓰기가 발생할 수 있습니다. 편집 전 댓글로 '이 섹션 작업 중'이라고 남기면 충돌을 줄일 수 있습니다.",
    context: "3명 이상이 하나의 문서를 동시에 편집해야 할 때",
    shortcut: "제목 스타일로 섹션 구분 + 댓글로 작업 영역 공유",
    image: "images/docs.svg",
    scenario: "기획안을 3명이 동시에 쓰는데 서로의 문장이 뒤섞입니다. 제목1로 섹션을 나눠 '1. 배경: 김대리 / 2. 목적: 박과장 / 3. 일정: 이사원'처럼 분담하면 커서 충돌 없이 빠르게 완성됩니다.",
    deptTags: ["기획팀", "마케팅팀", "총무팀"],
  },
  {
    category: "docs",
    level: "공동 작업",
    title: "@멘션과 할당된 작업으로 문서 내 협업 관리하기",
    desc: "댓글에서 @이름을 입력하면 해당 사용자에게 이메일 알림이 갑니다. '할당 대상' 체크박스를 켜면 해당 댓글이 할일로 지정되어, 상대방의 할일 목록에 나타납니다. 문서를 떠나지 않고도 업무 지시와 확인이 가능합니다.",
    context: "문서 안에서 특정 사람에게 수정이나 확인을 요청할 때",
    shortcut: "Ctrl/Cmd + Alt + M (댓글 삽입) → @이름 → 할당 체크",
    image: "images/docs.svg",
    scenario: "보고서 초안에서 재무 데이터가 빈 칸입니다. 해당 셀에 댓글을 달고 '@재무팀 김대리 이 수치 채워주세요'라고 할당하면, 김대리 메일에 알림이 가고 완료 시 체크 표시가 됩니다.",
    deptTags: ["기획팀", "마케팅팀", "총무팀"],
  },
  {
    category: "docs",
    level: "버전 관리",
    title: "버전에 이름 붙이기 — '최종', '검토전', '승인본' 관리법",
    desc: "파일 > 버전 기록에서 현재 버전에 이름을 붙일 수 있습니다(예: 'v1 초안', 'v2 팀장검토후', 'v3 최종승인'). 이름이 없으면 타임스탬프만 나열되어 어떤 버전이 중요한지 알 수 없습니다. 주요 마일스톤마다 반드시 이름을 붙이세요.",
    context: "여러 차례 수정을 거친 문서에서 특정 시점으로 돌아가야 할 때",
    shortcut: "파일 > 버전 기록 > 현재 버전 이름 지정",
    image: "images/docs.svg",
    scenario: "계약서가 5차 수정까지 갔는데 법무팀에서 '3차 수정본으로 돌려달라'고 합니다. 버전에 이름을 붙여뒀다면 'v3 법무검토완료'를 클릭해서 바로 복원할 수 있습니다.",
    deptTags: ["기획팀", "전략기획팀", "총무팀"],
  },
  {
    category: "docs",
    level: "버전 관리",
    title: "사본 만들기로 분기점(Branch) 관리하기",
    desc: "큰 방향 전환이 필요할 때는 '파일 > 사본 만들기'로 현재 문서를 복제하세요. 원본은 보존하고 사본에서 자유롭게 실험할 수 있습니다. 사본 제목에 날짜와 목적을 명시하면(예: '기획안_0331_B안') 나중에 비교가 쉽습니다.",
    context: "A안/B안처럼 서로 다른 방향의 문서를 동시에 발전시킬 때",
    shortcut: "파일 > 사본 만들기",
    image: "images/docs.svg",
    scenario: "마케팅 기획안에서 A안(보수적)과 B안(공격적)을 동시에 발전시키고 싶습니다. 원본에서 사본을 만들어 각각 독립적으로 발전시킨 후, 회의에서 나란히 비교하면 됩니다.",
    deptTags: ["기획팀", "마케팅팀"],
  },
  {
    category: "docs",
    level: "공동 작업",
    title: "알림 규칙 설정으로 문서 변경 실시간 감지하기",
    desc: "Docs/Sheets에서 도구 > 알림 규칙을 설정하면 누군가 편집하거나 댓글을 달 때 이메일 알림을 받을 수 있습니다. '변경사항이 있을 때' 또는 '일일 요약'으로 선택 가능합니다. 중요 문서는 실시간 알림을 켜두세요.",
    context: "중요한 공유 문서가 수정되었는지 바로 알고 싶을 때",
    shortcut: "도구 > 알림 규칙",
    image: "images/docs.svg",
    scenario: "허가 신청서를 부서 간 공동 작업 중인데, 누가 언제 수정했는지 놓치면 안 됩니다. 알림 규칙을 '변경사항이 있을 때 즉시'로 설정하면 편집이 일어날 때마다 메일이 옵니다.",
    deptTags: ["기획팀", "총무팀", "IT운영팀"],
  },
  {
    category: "drive",
    level: "버전 관리",
    title: "Drive에서 비-Google 파일(PDF, Excel 등) 버전 관리하기",
    desc: "Google Docs/Sheets가 아닌 PDF, Excel, PowerPoint 파일도 Drive에서 '버전 관리'가 됩니다. 파일을 우클릭 > 버전 관리에서 '새 버전 업로드'를 하면 같은 파일명으로 이전 버전이 쌓입니다. 최대 100개 또는 30일간 보관됩니다.",
    context: "Excel이나 PDF 파일도 버전별로 관리하고 싶을 때",
    shortcut: "파일 우클릭 > 버전 관리 > 새 버전 업로드",
    image: "images/drive.svg",
    scenario: "외부 업체가 보내준 Excel 견적서가 3차까지 왔는데, 이전 버전과 비교하고 싶습니다. 매번 같은 Drive 파일에 '새 버전 업로드'를 했다면 버전 관리 창에서 1차, 2차, 3차를 모두 다운받아 비교할 수 있습니다.",
    deptTags: ["총무팀", "영업팀", "기획팀"],
  },
  {
    category: "drive",
    level: "공동 작업",
    title: "공유 드라이브(Shared Drive)로 팀 자산 안전하게 관리하기",
    desc: "개인 Drive에 파일을 넣고 공유하면 그 사람이 퇴사하면 파일도 사라집니다. 공유 드라이브는 팀 소유이므로 개인 계정과 무관하게 유지됩니다. 프로젝트별 공유 드라이브를 만들고 권한을 체계적으로 관리하세요.",
    context: "팀 공용 문서를 안전하게 관리하고 싶을 때",
    shortcut: "Drive 좌측 > 공유 드라이브 > 새로 만들기",
    image: "images/drive.svg",
    scenario: "핵심 프로젝트 자료가 퇴사한 직원의 개인 Drive에 있어서 접근이 안 됩니다. 공유 드라이브를 사용했다면 소유권이 팀에 있으므로 이런 문제가 생기지 않습니다.",
    deptTags: ["총무팀", "IT운영팀", "기획팀"],
  },
  {
    category: "docs",
    level: "공동 작업",
    title: "보호된 시트/범위로 실수 편집 방지하기",
    desc: "Sheets에서 데이터 > 보호된 시트 및 범위를 설정하면 특정 셀이나 시트를 지정된 사용자만 편집할 수 있게 잠글 수 있습니다. 수식이 들어간 요약 행이나 마스터 데이터를 보호하면 실수로 덮어쓰는 사고를 방지합니다.",
    context: "여러 사람이 쓰는 시트에서 핵심 데이터를 보호하고 싶을 때",
    shortcut: "데이터 > 보호된 시트 및 범위",
    image: "images/docs.svg",
    scenario: "월간 매출 시트에서 요약 수식이 있는 행을 누군가 실수로 지워서 전체 수치가 깨졌습니다. 해당 행을 보호 범위로 설정하면 관리자만 편집 가능하고, 다른 팀원은 데이터 입력 영역만 수정할 수 있습니다.",
    deptTags: ["전략기획팀", "영업팀", "IT운영팀"],
  },
  {
    category: "docs",
    level: "공동 작업",
    title: "필터 보기(Filter View)로 다른 사람 화면 방해 없이 필터링하기",
    desc: "일반 필터를 적용하면 같은 시트를 보는 모든 사람의 화면이 바뀝니다. 대신 데이터 > 필터 보기 > 새 필터 보기를 사용하면 나만의 필터가 적용되어 다른 사용자에게 영향을 주지 않습니다. 필터 보기에 이름을 붙여 저장할 수도 있습니다.",
    context: "공유 시트에서 내가 필요한 데이터만 보고 싶을 때",
    shortcut: "데이터 > 필터 보기 > 새 필터 보기 만들기",
    image: "images/docs.svg",
    scenario: "전사 매출 시트에서 내 부서 데이터만 보려고 필터를 걸었더니 다른 팀에서 '시트가 이상해졌다'고 연락이 옵니다. 필터 보기를 사용하면 나만 필터가 적용되고, 다른 사람은 전체 데이터를 그대로 봅니다.",
    deptTags: ["영업팀", "전략기획팀", "기획팀"],
  },

  // ─── Google Calendar ───
  {
    category: "calendar",
    level: "시간 관리",
    title: "집중 시간(Focus Time)으로 회의 없는 블록 확보하기",
    desc: "캘린더에서 '집중 시간' 일정 유형을 선택하면 자동으로 알림이 음소거되고, 다른 사람이 회의를 잡으려 할 때 충돌 경고가 표시됩니다. 깊은 작업이 필요한 시간대에 반복 설정하세요.",
    context: "회의 때문에 몰입 시간이 계속 깨질 때",
    shortcut: "c > 집중 시간 선택",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "AI센터", "IT운영팀"],
  },
  {
    category: "calendar",
    level: "빠른 생성",
    title: "키보드 단축키 'c'로 일정을 빠르게 생성하기",
    desc: "캘린더 화면에서 c 키를 누르면 바로 새 일정 생성 창이 열립니다. q는 빠른 추가(자연어 입력)로, '내일 오후 2시 팀 미팅'처럼 입력하면 자동으로 날짜와 시간이 설정됩니다.",
    context: "마우스 클릭 없이 빠르게 일정을 추가하고 싶을 때",
    shortcut: "c (새 일정) / q (빠른 추가)",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "영업팀", "총무팀"],
  },
  {
    category: "calendar",
    level: "협업",
    title: "공유 캘린더로 팀 휴가·외근을 한눈에 보기",
    desc: "팀 운영용 캘린더를 따로 만들면 휴가, 외근, 당직 같은 운영 정보를 일관되게 볼 수 있습니다. '다른 사용자의 캘린더'에서 팀원 캘린더를 추가하면 오버레이로 겹쳐 볼 수도 있습니다.",
    context: "팀 가용 시간을 빠르게 확인해야 할 때",
    shortcut: "설정 > 캘린더 추가 > 새 캘린더",
    image: "images/calendar.svg",
    deptTags: ["총무팀", "기획팀", "영업팀"],
  },
  {
    category: "calendar",
    level: "예약",
    title: "예약 일정(Appointment Schedule)으로 미팅 잡기 자동화하기",
    desc: "설정한 시간대 중에서 상대방이 직접 빈 시간을 골라 예약할 수 있는 링크를 만들어줍니다. Calendly 없이 Google Calendar만으로 미팅 예약 페이지를 운영할 수 있어 외부 미팅 조율이 훨씬 편해집니다.",
    context: "1:1 미팅 시간을 이메일로 주고받느라 시간 낭비할 때",
    shortcut: "일정 만들기 > 예약 일정",
    image: "images/calendar.svg",
    deptTags: ["영업팀", "기획팀", "마케팅팀"],
  },
  {
    category: "calendar",
    level: "설정",
    title: "근무 시간과 근무 장소를 설정해 가용성 알리기",
    desc: "설정 > 근무 시간에서 요일별 근무 시간과 장소(사무실/재택)를 설정하면 동료가 회의를 잡을 때 자동으로 반영됩니다. 하이브리드 근무 환경에서 누가 언제 어디서 일하는지 투명하게 공유됩니다.",
    context: "재택/사무실 혼합 근무로 팀원 위치 파악이 어려울 때",
    shortcut: "설정 > 근무 시간 및 장소",
    image: "images/calendar.svg",
    deptTags: ["총무팀", "기획팀", "IT운영팀"],
  },
  {
    category: "calendar",
    level: "정리",
    title: "캘린더 색상 코딩으로 일정 유형을 시각적으로 구분하기",
    desc: "개별 일정이나 캘린더별로 색상을 지정하면 회의(파랑), 마감(빨강), 개인(초록) 등을 한눈에 구분할 수 있습니다. 일정을 우클릭하면 12가지 색상 중 선택 가능합니다.",
    context: "하루에 일정이 많아 종류별 구분이 어려울 때",
    shortcut: "일정 우클릭 > 색상 선택",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "영업팀"],
  },
  {
    category: "calendar",
    level: "구분",
    title: "리마인더 vs 할 일 vs 일정의 차이를 이해하고 활용하기",
    desc: "리마인더는 완료할 때까지 매일 반복 표시되고, 할 일(Tasks)은 기한과 하위 작업을 관리할 수 있으며, 일정은 특정 시간에 발생하는 이벤트입니다. 목적에 맞게 구분해서 쓰면 캘린더가 더 깔끔해집니다.",
    context: "캘린더에 모든 것을 일정으로만 넣고 있을 때",
    shortcut: "캘린더 > 할 일 / 리마인더 전환",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "calendar",
    level: "부재",
    title: "부재중(OOO) 일정으로 회의 자동 거절하기",
    desc: "'부재중' 일정 유형을 선택하면 해당 시간에 들어오는 회의 초대를 자동으로 거절하고, 사유 메시지도 설정할 수 있습니다. 휴가나 장기 출장 전에 미리 설정해두세요.",
    context: "휴가 중에도 회의 초대가 계속 올 때",
    shortcut: "일정 만들기 > 부재중",
    image: "images/calendar.svg",
    deptTags: ["총무팀", "기획팀", "영업팀"],
  },
  {
    category: "calendar",
    level: "자동화",
    title: "회의 노트를 일정에 연결해 기록 자동화하기",
    desc: "일정에서 '회의 노트 추가'를 클릭하면 Google Docs가 자동 생성되어 참석자, 날짜, 안건이 미리 채워집니다. 회의 후 노트 정리 시간이 크게 줄어들고, 캘린더에서 바로 접근 가능합니다.",
    context: "회의 후 별도로 회의록을 만드는 게 번거로울 때",
    shortcut: "일정 열기 > 회의 노트 추가",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "총무팀", "전략기획팀"],
  },
  {
    category: "calendar",
    level: "정리",
    title: "알림 시간을 일정 종류별로 다르게 설정하기",
    desc: "내부 1:1은 10분 전, 외부 미팅은 30분 전 알림으로 설정하면 늦을 확률이 줄어듭니다. 캘린더별 기본 알림을 설정하고, 특수 일정은 개별 알림을 추가하세요. 모바일 알림과 이메일 알림을 함께 쓰면 놓칠 확률이 더 줄어듭니다.",
    context: "회의를 자주 놓치거나 준비 시간이 부족할 때",
    shortcut: "설정 > 캘린더 > 기본 알림",
    image: "images/calendar.svg",
    deptTags: ["영업팀", "기획팀"],
  },
  {
    category: "calendar",
    level: "글로벌 협업",
    title: "시간대 표시로 해외 팀과 회의 잡기",
    desc: "설정에서 보조 시간대를 추가하면 캘린더에 두 시간대가 나란히 표시됩니다. '세계 시계' 기능을 켜면 여러 도시의 현재 시간도 사이드바에서 확인 가능합니다.",
    context: "해외 사무소와 자주 미팅을 잡아야 할 때",
    shortcut: "설정 > 시간대 > 보조 시간대 표시",
    image: "images/calendar.svg",
    deptTags: ["영업팀", "전략기획팀", "마케팅팀"],
  },
  {
    category: "calendar",
    level: "단축키",
    title: "캘린더 키보드 단축키로 뷰 전환 빠르게 하기",
    desc: "d(일), w(주), m(월), a(일정 목록), t(오늘로 이동) 단축키로 뷰를 빠르게 전환하세요. j/k로 앞뒤 날짜를 이동하고, /로 검색을 바로 열 수 있습니다. 단축키를 켜려면 설정 > 키보드 단축키를 활성화하세요.",
    context: "캘린더를 마우스 없이 빠르게 탐색하고 싶을 때",
    shortcut: "d / w / m / t / j / k",
    image: "images/calendar.svg",
    deptTags: ["기획팀", "영업팀"],
  },

  // ─── Google Meet ───
  {
    category: "meet",
    level: "회의 품질",
    title: "입장 전 오디오·카메라 체크 습관화하기",
    desc: "Meet 입장 전에 마이크, 스피커, 카메라를 미리 점검하면 회의 첫 3분을 낭비하지 않습니다. 외부 발표라면 네트워크와 화면 공유도 확인하세요.",
    context: "중요한 미팅에서 장비 이슈를 줄이고 싶을 때",
    shortcut: "미리보기 화면에서 테스트",
    image: "images/meet.svg",
    deptTags: ["기획팀", "영업팀", "마케팅팀"],
  },
  {
    category: "meet",
    level: "기록",
    title: "녹화와 실시간 회의 노트를 함께 운영하기",
    desc: "녹화만 믿지 말고 한 명은 액션 아이템을 바로 적는 역할을 맡기세요. 녹화 링크와 회의록 문서를 캘린더 설명란에 함께 넣어두면 찾기 쉽습니다.",
    context: "회의 후 액션 정리가 자주 늦어질 때",
    shortcut: "활동 패널 > 녹화 시작",
    image: "images/meet.svg",
    deptTags: ["기획팀", "총무팀", "전략기획팀"],
  },
  {
    category: "meet",
    level: "발표",
    title: "탭 공유 vs 화면 전체 공유를 상황에 맞게 선택하기",
    desc: "영상·애니메이션 자료는 탭 공유가 안정적이고, 여러 앱을 넘나드는 데모는 전체 화면 공유가 자연스럽습니다. 발표 전에 방식을 정해 두세요.",
    context: "데모나 발표 중 화면 공유가 꼬일 때",
    shortcut: "발표 > 탭 / 전체 화면 / 창 선택",
    image: "images/meet.svg",
    deptTags: ["IT운영팀", "AI센터", "기획팀"],
  },
  {
    category: "meet",
    level: "집중도",
    title: "자막과 손들기로 대규모 회의 진행 정리하기",
    desc: "대규모 회의에서 자막을 켜면 발언을 놓치기 덜하고, 손들기로 발언 순서를 정리하면 끼어들기가 줄어듭니다. 비대면 교육이나 부서 공지에 유용합니다.",
    context: "참석자가 많은 회의에서 진행이 산만할 때",
    shortcut: "하단 바 > 자막 켜기 / 손들기",
    image: "images/meet.svg",
    deptTags: ["총무팀", "기획팀", "마케팅팀"],
  },
  {
    category: "meet",
    level: "소그룹",
    title: "소회의실로 팀별 토론 후 전체 공유하기",
    desc: "소회의실(Breakout Rooms) 기능으로 참석자를 소그룹으로 나눈 뒤 각 그룹에서 논의한 결과를 전체 세션에서 공유하면 참여도가 높아집니다.",
    context: "워크숍이나 교육에서 소그룹 활동이 필요할 때",
    shortcut: "활동 패널 > 소회의실",
    image: "images/meet.svg",
    deptTags: ["기획팀", "마케팅팀", "AI센터"],
  },

  // ─── Slack ───
  {
    category: "slack",
    level: "필수 단축키",
    title: "Cmd+K로 채널·DM·파일을 즉시 이동하기",
    desc: "Cmd/Ctrl + K를 누르면 채널, DM, 파일을 이름으로 바로 검색해 이동할 수 있습니다. 채널 목록을 스크롤할 필요 없이 2~3글자만 입력하면 바로 점프합니다. Slack에서 가장 많이 쓰게 될 단축키입니다.",
    context: "채널이 많아 원하는 채널을 찾기 어려울 때",
    shortcut: "Cmd/Ctrl + K (빠른 이동)",
    image: "images/slack.svg",
    deptTags: ["기획팀", "IT운영팀", "AI센터"],
  },
  {
    category: "slack",
    level: "검색",
    title: "고급 검색 연산자로 메시지·파일·링크 빠르게 찾기",
    desc: "from:, in:, has:link, before:, after: 조합을 익히면 메시지 히스토리를 데이터베이스처럼 다룰 수 있습니다. 예: from:@홍길동 in:#프로젝트 has:link after:2025-01-01로 올해 특정 채널에서 링크가 포함된 메시지를 바로 찾으세요.",
    context: "채널 메시지가 많아 과거 결정을 못 찾을 때",
    shortcut: "Cmd/Ctrl + G → from: / in: / has:",
    image: "images/slack.svg",
    deptTags: ["기획팀", "영업팀", "IT운영팀"],
  },
  {
    category: "slack",
    level: "자동화",
    title: "워크플로우 빌더로 반복 업무 자동화하기",
    desc: "워크플로우 빌더에서 양식 제출, 채널 메시지, 일정 트리거 등을 조합하면 코딩 없이 자동화를 구축할 수 있습니다. 예: 매주 월요일 주간보고 양식 자동 전송, 새 멤버 입장 시 환영 메시지 자동 발송 등.",
    context: "반복적인 요청이나 공지를 사람이 계속 처리하고 있을 때",
    shortcut: "도구 > 워크플로우 빌더",
    image: "images/slack.svg",
    deptTags: ["IT운영팀", "총무팀", "AI센터"],
  },
  {
    category: "slack",
    level: "실시간 협업",
    title: "허들(Huddle)로 간단한 논의를 빠르게 해결하기",
    desc: "텍스트로 길게 설명할 필요 없이 허들을 열면 음성으로 바로 소통할 수 있습니다. 화면 공유와 스레드 메모도 가능해서 짧은 페어 작업에 적합합니다. 채널 허들은 여러 명이 자유롭게 참여/퇴장할 수 있습니다.",
    context: "채팅으로 주고받기엔 복잡한 논의가 있을 때",
    shortcut: "Cmd/Ctrl + Shift + H (허들 시작)",
    image: "images/slack.svg",
    deptTags: ["기획팀", "IT운영팀", "디자인팀"],
  },
  {
    category: "slack",
    level: "지식 관리",
    title: "캔버스(Canvas)에 팀 위키를 만들어 관리하기",
    desc: "채널이나 DM에 캔버스를 만들면 메시지 사이에 흩어진 정보를 구조화된 문서로 정리할 수 있습니다. 제목, 체크리스트, 코드 블록, 이미지를 넣을 수 있어 온보딩 가이드, FAQ, 프로세스 문서에 유용합니다.",
    context: "팀 내 반복 질문이 많거나 정보가 흩어져 있을 때",
    shortcut: "채널 > 캔버스 탭 > 새 캔버스",
    image: "images/slack.svg",
    deptTags: ["IT운영팀", "AI센터", "기획팀"],
  },
  {
    category: "slack",
    level: "채널 정리",
    title: "채널 섹션·별표·음소거로 사이드바 정리하기",
    desc: "사이드바에서 채널을 섹션(예: '프로젝트', '팀', '알림')으로 분류하면 탐색이 쉬워집니다. 핵심 채널은 별표로 상단 고정하고, 참고만 하는 채널은 음소거해서 알림 노이즈를 줄이세요.",
    context: "채널이 30개 이상이라 사이드바가 복잡할 때",
    shortcut: "사이드바 > 섹션 만들기 / 채널 우클릭 > 음소거",
    image: "images/slack.svg",
    deptTags: ["기획팀", "총무팀"],
  },
  {
    category: "slack",
    level: "외부 협업",
    title: "Slack Connect로 외부 파트너와 채널 공유하기",
    desc: "Slack Connect를 사용하면 외부 회사 사람들을 별도의 공유 채널에 초대할 수 있습니다. 이메일 대신 실시간으로 소통하면서도 내부 채널과는 완전히 분리됩니다.",
    context: "외부 파트너와 이메일 대신 실시간 협업이 필요할 때",
    shortcut: "채널 만들기 > Slack Connect 채널",
    image: "images/slack.svg",
    deptTags: ["영업팀", "마케팅팀", "기획팀"],
  },
  {
    category: "slack",
    level: "소통",
    title: "커스텀 이모지와 상태 메시지로 팀 문화 만들기",
    desc: "팀 고유의 커스텀 이모지(로고, 밈 등)를 추가하면 리액션이 더 풍부해집니다. 상태 메시지에 근무 상황(회의중, 점심, 재택)을 표시하면 응답 가능 여부를 자연스럽게 공유할 수 있습니다.",
    context: "팀원의 현재 상태를 알기 어렵거나 팀 분위기를 활성화하고 싶을 때",
    shortcut: "이모지 > 이모지 추가 / 프로필 > 상태 설정",
    image: "images/slack.svg",
    deptTags: ["총무팀", "마케팅팀"],
  },
  {
    category: "slack",
    level: "자동화",
    title: "/remind로 나와 팀에게 리마인더 설정하기",
    desc: "/remind 명령어로 자신, 다른 사람, 채널에 리마인더를 설정할 수 있습니다. 예: /remind me 내일 오전 10시 보고서 제출, /remind #팀채널 매주 금요일 오후 5시 주간 회고. 간단하지만 까먹기 쉬운 일을 확실히 잡아줍니다.",
    context: "중요한 할 일을 자주 놓치거나 반복 공지가 필요할 때",
    shortcut: "/remind [대상] [시간] [내용]",
    image: "images/slack.svg",
    deptTags: ["기획팀", "총무팀", "영업팀"],
  },
  {
    category: "slack",
    level: "협업 정리",
    title: "스레드를 적극 활용해 채널 본문 깨끗하게 유지하기",
    desc: "메인 채널에는 공지와 주요 대화만 남기고, 세부 논의는 반드시 스레드에서 이어가세요. '채널에도 게시' 체크를 활용하면 스레드 결론을 본문에도 공유할 수 있습니다.",
    context: "채널 본문이 잡담과 실무 대화로 뒤섞일 때",
    shortcut: "메시지 > 스레드로 답장",
    image: "images/slack.svg",
    deptTags: ["기획팀", "IT운영팀", "총무팀"],
  },
  {
    category: "slack",
    level: "핀·북마크",
    title: "핀과 북마크로 중요 정보를 채널 상단에 고정하기",
    desc: "중요한 메시지는 핀(Pin)으로 고정하고, 자주 참조하는 링크·문서는 채널 상단 북마크 바에 추가하세요. 채널에 처음 들어온 사람도 핵심 정보를 바로 확인할 수 있습니다.",
    context: "과거의 중요 결정이나 링크를 매번 다시 찾아야 할 때",
    shortcut: "메시지 > 더보기 > 핀 / 채널 상단 > 북마크 추가",
    image: "images/slack.svg",
    deptTags: ["기획팀", "총무팀", "IT운영팀"],
  },
  {
    category: "slack",
    level: "연동",
    title: "Google Calendar·Drive 앱 연동으로 알림 통합하기",
    desc: "Slack에 Google Calendar 앱을 연동하면 일정 10분 전 DM으로 알림이 오고, Google Drive 앱을 연동하면 파일 공유 시 바로 권한 요청이 가능합니다. 앱 디렉터리에서 설치 후 /gcal, /drive 명령어를 활용하세요.",
    context: "여러 도구를 오가며 확인하는 게 번거로울 때",
    shortcut: "앱 > Google Calendar / Drive 추가",
    image: "images/slack.svg",
    deptTags: ["기획팀", "IT운영팀", "영업팀"],
  },
  {
    category: "slack",
    level: "서식",
    title: "마크다운과 코드 블록으로 메시지 가독성 높이기",
    desc: "*굵게*, _기울임_, ~취소선~, `인라인 코드`, ```코드 블록``` 서식을 활용하면 메시지 가독성이 크게 올라갑니다. 목록은 숫자나 - 로, 인용은 > 로 시작하세요.",
    context: "길고 복잡한 내용을 읽기 쉽게 전달하고 싶을 때",
    shortcut: "*굵게* / `코드` / ```코드 블록```",
    image: "images/slack.svg",
    deptTags: ["IT운영팀", "AI센터", "기획팀"],
  },
  {
    category: "slack",
    level: "예약",
    title: "메시지 예약 전송으로 시간대 차이 배려하기",
    desc: "메시지 작성 후 전송 버튼 옆 화살표를 클릭하면 예약 전송 옵션이 나옵니다. 다른 시간대의 팀원에게 근무 시간에 맞춰 보낼 수 있고, 중요 공지의 최적 시간을 미리 잡아둘 수도 있습니다.",
    context: "야근이나 주말에 작성한 메시지를 근무 시간에 보내고 싶을 때",
    shortcut: "전송 버튼 > 예약 전송",
    image: "images/slack.svg",
    deptTags: ["영업팀", "마케팅팀", "기획팀"],
  },
  {
    category: "slack",
    level: "집중 관리",
    title: "방해 금지(DND)와 알림 스케줄로 퇴근 후 알림 차단하기",
    desc: "설정 > 알림에서 알림 스케줄을 설정하면 지정 시간 외에는 자동으로 방해 금지 모드가 됩니다. 긴급 멘션만 받으려면 '긴급 알림 허용'을 켜세요. Cmd/Ctrl + Shift + D로 즉시 DND를 토글할 수도 있습니다.",
    context: "퇴근 후나 집중 시간에 알림이 계속 올 때",
    shortcut: "Cmd/Ctrl + Shift + D (DND 토글)",
    image: "images/slack.svg",
    deptTags: ["기획팀", "IT운영팀"],
  },
];

// ============================================
// State
// ============================================
let activeCategory = "all";
let activeDept = "all";
let searchTerm = "";

// ============================================
// DOM References
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  sidebar: $("#sidebar"),
  overlay: $("#sidebarOverlay"),
  menuBtn: $("#menuBtn"),
  searchInput: $("#searchInput"),
  searchInputMobile: $("#searchInputMobile"),
  tipsGrid: $("#tipsGrid"),
  emptyState: $("#emptyState"),
  contentTitle: $("#contentTitle"),
  contentCount: $("#contentCount"),
  themeToggle: $("#themeToggle"),
  themeToggleMobile: $("#themeToggleMobile"),
  themeIcon: $("#themeIcon"),
  themeIconMobile: $("#themeIconMobile"),
  themeLabel: $("#themeLabel"),
  statTotal: $("#statTotal"),
  statShortcuts: $("#statShortcuts"),
};

// ============================================
// Theme
// ============================================
function initTheme() {
  const stored = localStorage.getItem("kd-tips-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = stored ? stored === "dark" : prefersDark;
  document.body.classList.toggle("dark", dark);
  updateThemeUI();
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("kd-tips-theme", isDark ? "dark" : "light");
  updateThemeUI();
}

function updateThemeUI() {
  const isDark = document.body.classList.contains("dark");
  const icon = isDark ? "ri-sun-line" : "ri-moon-line";
  const label = isDark ? "라이트 모드" : "다크 모드";
  dom.themeIcon.className = icon;
  dom.themeIconMobile.className = icon;
  dom.themeLabel.textContent = label;
}

// ============================================
// Sidebar (mobile)
// ============================================
function openSidebar() {
  dom.sidebar.classList.add("open");
  dom.overlay.classList.add("visible");
}

function closeSidebar() {
  dom.sidebar.classList.remove("open");
  dom.overlay.classList.remove("visible");
}

// ============================================
// Counts
// ============================================
function updateCounts() {
  const counts = {};
  for (const key of Object.keys(CATEGORIES)) {
    counts[key] = TIPS.filter((t) => t.category === key).length;
  }
  const total = TIPS.length;

  dom.statTotal.textContent = total;
  dom.statShortcuts.textContent = TIPS.filter((t) => t.shortcut && !t.shortcut.includes("없음")).length;

  const countEl = (id) => document.getElementById(id);
  countEl("countAll").textContent = total;
  countEl("countGmail").textContent = counts.gmail;
  countEl("countDrive").textContent = counts.drive;
  countEl("countDocs").textContent = counts.docs;
  countEl("countCalendar").textContent = counts.calendar;
  countEl("countMeet").textContent = counts.meet;
  countEl("countSlack").textContent = counts.slack;
}

// ============================================
// Filter & Render
// ============================================
function getFilteredTips() {
  const q = searchTerm.trim().toLowerCase();
  return TIPS.filter((tip) => {
    const catMatch = activeCategory === "all" || tip.category === activeCategory;
    if (!catMatch) return false;
    if (activeDept !== "all") {
      if (!tip.deptTags || !tip.deptTags.includes(activeDept)) return false;
    }
    if (!q) return true;
    const haystack = [tip.title, tip.desc, tip.context, tip.shortcut, tip.level, tip.scenario, CATEGORIES[tip.category]?.name]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

function renderTips() {
  const filtered = getFilteredTips();
  dom.tipsGrid.innerHTML = "";
  dom.emptyState.style.display = filtered.length === 0 ? "block" : "none";
  dom.contentCount.textContent = `${filtered.length}개 팁`;

  filtered.forEach((tip, i) => {
    const cat = CATEGORIES[tip.category];
    const card = document.createElement("article");
    card.className = "tip-card";
    card.style.animationDelay = `${Math.min(i * 40, 400)}ms`;

    // Build shortcut display
    let shortcutHTML = "";
    if (tip.shortcut) {
      const parts = tip.shortcut.split(" / ");
      if (parts.length <= 3 && parts.every((p) => p.length < 30)) {
        shortcutHTML = `<span class="tip-shortcut-keys">${parts.map((p) => `<kbd>${escapeHTML(p.trim())}</kbd>`).join(" ")}</span>`;
      } else {
        shortcutHTML = `<span class="tip-meta-value">${escapeHTML(tip.shortcut)}</span>`;
      }
    }

    // Build image thumbnail
    const imgSrc = tip.image || TIP_IMAGES[tip.category];
    const imageHTML = imgSrc
      ? `<div class="tip-image-wrap" data-img="${imgSrc}" data-title="${escapeHTML(tip.title)}">
          <img src="${imgSrc}" alt="${escapeHTML(tip.title)}" class="tip-image" loading="lazy" decoding="async">
          <div class="tip-image-zoom"><i class="ri-zoom-in-line"></i></div>
        </div>`
      : "";

    card.innerHTML = `
      <div class="tip-card-top">
        <span class="tip-category-tag" data-cat="${tip.category}">
          <i class="${cat.icon}"></i>
          ${escapeHTML(cat.name)}
        </span>
        <span class="tip-level">${escapeHTML(tip.level)}</span>
      </div>
      ${imageHTML}
      <h3 class="tip-title">${escapeHTML(tip.title)}</h3>
      <p class="tip-desc">${escapeHTML(tip.desc)}</p>
      ${tip.scenario ? `<div class="tip-scenario">
        <span class="tip-scenario-icon">📌</span>
        <div class="tip-scenario-text">
          <span class="tip-scenario-label">실전 시나리오:</span>${escapeHTML(tip.scenario)}
        </div>
      </div>` : ""}
      <div class="tip-meta">
        <div class="tip-meta-row">
          <span class="tip-meta-label">활용 상황</span>
          <span class="tip-meta-value">${escapeHTML(tip.context)}</span>
        </div>
        <div class="tip-meta-row">
          <span class="tip-meta-label">단축키</span>
          ${shortcutHTML}
        </div>
      </div>
      ${tip.deptTags && tip.deptTags.length ? `<div class="tip-dept-tags">${tip.deptTags.map((d) => `<span class="dept-tag" data-dept="${escapeHTML(d)}">${escapeHTML(d)}</span>`).join("")}</div>` : ""}
    `;

    dom.tipsGrid.appendChild(card);
  });
}

function setActiveDept(dept) {
  activeDept = dept;
  document.querySelectorAll(".nav-dept-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.dept === dept);
  });
  renderTips();
}

function setActiveCategory(cat) {
  activeCategory = cat;

  // Update nav
  $$(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.category === cat);
  });

  // Update content header
  if (cat === "all") {
    dom.contentTitle.innerHTML = `<i class="ri-apps-line"></i><span>전체 보기</span>`;
  } else {
    const c = CATEGORIES[cat];
    dom.contentTitle.innerHTML = `<i class="${c.icon}"></i><span>${escapeHTML(c.name)}</span>`;
  }

  renderTips();
}

// ============================================
// Helpers
// ============================================
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ============================================
// Lightbox
// ============================================
function initLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="닫기"><i class="ri-close-line"></i></button>
      <img class="lightbox-img" id="lightboxImg" alt="">
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const close = () => lightbox.classList.remove("active");
  lightbox.querySelector(".lightbox-backdrop").addEventListener("click", close);
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) close();
  });
}

function openLightbox(src, title) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  img.src = src;
  img.alt = title;
  caption.textContent = title;
  lightbox.classList.add("active");
}

// ============================================
// Events
// ============================================
function bindEvents() {
  // Theme
  dom.themeToggle.addEventListener("click", toggleTheme);
  dom.themeToggleMobile.addEventListener("click", toggleTheme);

  // Mobile sidebar
  dom.menuBtn.addEventListener("click", openSidebar);
  dom.overlay.addEventListener("click", closeSidebar);

  // Nav items
  $$(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveCategory(item.dataset.category);
      closeSidebar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Department filter
  $$(".nav-dept-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveDept(item.dataset.dept);
      closeSidebar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Dept tag click on cards
  dom.tipsGrid.addEventListener("click", (e) => {
    const tag = e.target.closest(".dept-tag");
    if (tag) {
      setActiveDept(tag.dataset.dept);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // Search (sidebar)
  dom.searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    dom.searchInputMobile.value = searchTerm;
    renderTips();
  });

  // Search (mobile)
  dom.searchInputMobile.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    dom.searchInput.value = searchTerm;
    renderTips();
  });

  // Image lightbox (delegated)
  dom.tipsGrid.addEventListener("click", (e) => {
    const wrap = e.target.closest(".tip-image-wrap");
    if (wrap) {
      openLightbox(wrap.dataset.img, wrap.dataset.title);
    }
  });

  // Keyboard shortcut for search
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const input = window.innerWidth > 768 ? dom.searchInput : dom.searchInputMobile;
      input.focus();
    }
    if (e.key === "Escape") {
      dom.searchInput.blur();
      dom.searchInputMobile.blur();
      closeSidebar();
    }
  });
}

// ============================================
// Init
// ============================================
function init() {
  initTheme();
  initLightbox();
  updateCounts();
  renderTips();
  bindEvents();
}

init();
