#!/bin/bash

# Deploy 스킬 - Git 변경사항 자동 커밋 및 푸시
# 사용: bash deploy.sh [repo-path]

REPO_PATH="${1:-.}"

# 색상 정의
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# git 저장소 확인
if [ ! -d "$REPO_PATH/.git" ]; then
    echo -e "${RED}❌ git 저장소가 아닙니다${NC}"
    exit 1
fi

cd "$REPO_PATH" || exit 1

# 현재 날짜 (YYYY-MM-DD)
CURRENT_DATE=$(date +%Y-%m-%d)

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📦 배포 시작${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# 1. git status 확인
echo -e "\n${YELLOW}1️⃣  변경사항 확인 중...${NC}"
STATUS=$(git status --porcelain)

if [ -z "$STATUS" ]; then
    echo -e "${YELLOW}ℹ️  변경사항 없음 - 배포할 파일이 없습니다${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    exit 0
fi

# 2. 변경사항 분류 및 출력
echo -e "\n${YELLOW}파일 변경 상태:${NC}"
echo "$STATUS" | while read -r line; do
    status_code="${line:0:2}"
    filename="${line:3}"

    case "$status_code" in
        "??") echo -e "  ${GREEN}✚${NC} 추가됨: $filename" ;;
        " M") echo -e "  ${BLUE}◆${NC} 수정됨: $filename" ;;
        "M ") echo -e "  ${BLUE}◆${NC} 수정됨: $filename" ;;
        " D") echo -e "  ${RED}✕${NC} 삭제됨: $filename" ;;
        "D ") echo -e "  ${RED}✕${NC} 삭제됨: $filename" ;;
        *) echo -e "  ${YELLOW}○${NC} 변경됨: $filename ($status_code)" ;;
    esac
done

# 파일 수 계산
FILE_COUNT=$(echo "$STATUS" | wc -l)
echo -e "\n  총 ${GREEN}$FILE_COUNT${NC}개 파일 변경"

# 3. git add
echo -e "\n${YELLOW}2️⃣  변경사항 스테이징 중...${NC}"
git add . || {
    echo -e "${RED}❌ git add 실패${NC}"
    exit 1
}
echo -e "${GREEN}✓ 스테이징 완료${NC}"

# 4. 커밋 메시지 생성
COMMIT_MESSAGE="Update: $CURRENT_DATE - $FILE_COUNT개 파일 변경"

# 5. 커밋 실행
echo -e "\n${YELLOW}3️⃣  커밋 중...${NC}"
git commit -m "$COMMIT_MESSAGE" > /dev/null 2>&1 || {
    echo -e "${RED}❌ git commit 실패${NC}"
    exit 1
}

# 6. 커밋 정보 수집
COMMIT_HASH=$(git rev-parse --short HEAD)
COMMIT_FULL_HASH=$(git rev-parse HEAD)
COMMIT_TIMESTAMP=$(git log -1 --pretty=format:"%ar")

echo -e "${GREEN}✓ 커밋 완료${NC}"
echo -e "  해시: ${GREEN}$COMMIT_HASH${NC}"
echo -e "  시간: $COMMIT_TIMESTAMP"

# 7. 푸시 실행
echo -e "\n${YELLOW}4️⃣  푸시 중...${NC}"

PUSH_OUTPUT=$(git push origin master 2>&1)
PUSH_STATUS=$?

if [ $PUSH_STATUS -eq 0 ]; then
    echo -e "${GREEN}✓ 푸시 성공${NC}"
    PUSH_RESULT="✓ 성공"
else
    echo -e "${RED}✕ 푸시 실패${NC}"
    echo "$PUSH_OUTPUT"
    PUSH_RESULT="✕ 실패"
fi

# 8. 완료 리포트
echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ 배포 완료!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e ""
echo -e "  커밋: ${GREEN}$COMMIT_HASH${NC} ($COMMIT_FULL_HASH)"
echo -e "  메시지: $COMMIT_MESSAGE"
echo -e "  변경 파일: ${GREEN}$FILE_COUNT${NC}개"
echo -e "  브랜치: master"
echo -e "  푸시 상태: $PUSH_RESULT"
echo -e ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

exit $PUSH_STATUS
