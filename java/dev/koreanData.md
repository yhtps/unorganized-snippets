# 한국관련 자바코드들

## 랜덤한 한국이름 생성 메서드

```java
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
```

```java
 private String koreanName() {
  final List<String> familyName = Arrays.asList("강", "고", "곽", "권", "구", "김", "나", "남", "남궁", "노", "독", "독고", "동방", "도", "란",
    "류", "문", "민", "박", "반", "백", "배", "방", "백", "복", "봉", "사공", "사마", "서", "서문", "선", "선우", "설", "성", "손", "송", "신", "심",
    "안", "양", "엄", "여", "오", "우", "원", "유", "윤", "은", "이", "임", "장", "전", "정", "조", "주", "지", "진", "차", "천", "최", "추", "탁",
    "태", "하", "한", "허", "현", "형", "홍", "황", "황보", "회", "효");
  final List<String> names = Arrays.asList("가", "경", "건", "고", "관", "광", "구", "규", "근", "기", "길", "나", "남", "노", "누", "다", "단",
    "달", "담", "대", "덕", "도", "동", "두", "라", "래", "로", "루", "리", "마", "만", "명", "무", "문", "미", "민", "바", "박", "백", "범", "별",
    "병", "보", "빛", "사", "산", "상", "새", "서", "석", "선", "설", "섭", "성", "세", "소", "솔", "수", "숙", "순", "숭", "슬", "승", "시", "신",
    "아", "안", "애", "엄", "여", "연", "영", "예", "오", "옥", "완", "요", "용", "우", "원", "월", "위", "유", "윤", "율", "으", "은", "의", "이",
    "익", "인", "일", "잎", "자", "잔", "장", "재", "전", "정", "제", "조", "종", "주", "준", "중", "지", "진", "찬", "창", "채", "천", "철", "초",
    "춘", "충", "치", "탐", "태", "택", "판", "하", "한", "해", "혁", "현", "형", "혜", "호", "홍", "화", "환", "회", "효", "훈", "휘", "희", "운",
    "모", "배", "부", "림", "봉", "혼", "황", "량", "린", "을", "비", "솜", "공", "면", "탁", "온", "디", "항", "후", "려", "균", "묵", "송", "욱",
    "휴", "언", "령", "섬", "들", "견", "추", "걸", "삼", "열", "웅", "분", "변", "양", "출", "타", "흥", "겸", "곤", "번", "식", "란", "더", "손",
    "술", "훔", "반", "빈", "실", "직", "흠", "흔", "악", "람", "뜸", "권", "복", "심", "헌", "엽", "학", "개", "롱", "평", "늘", "늬", "랑", "얀",
    "향", "울", "련");
  Collections.shuffle(familyName);
  Collections.shuffle(names);
  final int nameLength = Math.random() < 0.9 ? 2 : (int) (Math.random() * 4) + 1;
  final StringBuilder fullName = new StringBuilder(familyName.get(0));
  fullName.append(String.join("", names.subList(0, nameLength)));
  return fullName.toString();
 }
```

> 테스트용

```java
 void randomKoreanName() {
  for (int i = 0; i < 99; i++) {
   System.out.println(i + 1 + "번째 이름: " + koreanName());
  }
 }
```

## 랜덤한 한국휴대전화번호 생성 메서드

```java
 private String koreanMobilePhoneNumber() {
  final StringBuilder mobilePhoneNumber = new StringBuilder("010");
  mobilePhoneNumber.append(String.format("%04d", (int) (Math.random() * 10000)))
          .append(String.format("%04d", (int) (Math.random() * 10000)));
  return mobilePhoneNumber.toString();
 }
```

> 테스트용

```java
 void randomKoreanMobilePhoneNumber() {
  for (int i = 0; i < 99; i++) {
   System.out.println(i + 1 + "번째 전화번호: " + koreanMobilePhoneNumber());
  }
 }
```

### 휴대전화번호에 하이픈을 추가하여 반환하는 메서드

```java
 private String toHyphenatedNumber(String koreanMobilePhoneNumber) {
  if (!koreanMobilePhoneNumber.matches("\\d+")) throw new IllegalArgumentException("8자리나 11자리의 숫자 조합의 문자열의 인자만 받을수 있습니다");
  return switch (koreanMobilePhoneNumber.length()) {
  case 8 -> String.format("010-%s-%s", koreanMobilePhoneNumber.substring(0, 4), koreanMobilePhoneNumber.substring(4));
  case 11 -> String.format("%s-%s-%s", koreanMobilePhoneNumber.substring(0, 3), koreanMobilePhoneNumber.substring(3, 7),
    koreanMobilePhoneNumber.substring(7));
  default -> throw new IllegalArgumentException("8자리나 11자리의 숫자 조합의 문자열의 인자만 받을수 있습니다");
  };
 }
```

> 테스트용

```java
 void printHyphenatedNumber() {
  for (int i = 0; i < 99; i++) {
   System.out.println(i + 1 + "번째 11자리전화번호: " + toHyphenatedNumber(koreanMobilePhoneNumber()));
   System.out.printf("%s번째  8자리전화번호: %s\n", i + 1, toHyphenatedNumber(String.format("%08d", i)));
  }
 }
```
