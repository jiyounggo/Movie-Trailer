# 영화 트레일러 사이트 만들기



## 과제 소개

- public API를 이용하여 영화 트레일러 사이트 만들기
- [과제 안내 링크](https://younuk.notion.site/65c217ea28d1421d9d01d5ee93be9b08)

---

## 🚀프로젝트 설명 및 역할

### 1) 기술스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&amp;logo=React&amp;logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&amp;logo=React Router&amp;logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&amp;logo=React Query&amp;logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&amp;logo=styled-components&amp;logoColor=white"> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&amp;logo=MUI&amp;logoColor=white">

### -React Query란?

- 데이터 Fetching, 캐싱, 동기화, 서버 쪽 데이터 업데이트 등을 쉽게 만들어 주는 React 라이브러리이다.

### -이번 과제에서 React Query를 사용한 이유

- 기존 상태 관리 라이브러리 ( Redux, Mobx, Recoil )를 사용할 경우 서버의 데이터를 관리하기 적합하지 않다고 판단하였고, 아래의 리액트 쿼리의 장점들을 이유로 React-Query를 사용하였다.

### -React-Query 장점

1. 서버 쪽 데이터를 가비지 컬렉션을 이용하여 자동으로 메모리를 관리해 준다. ( 서버 데이터 관리 편리함 )

2. 캐싱으로 데이터 업데이트 시 반영이 빠르다. ( 데이터 접근 속도 빠름 )

3. loading 및 error 처리가 간단하다.

4. 타 상태 관리 라이브러리들 보다 코드 작성에 있어서 단순하다.

### 2) 데모영상

- https://drive.google.com/file/d/1IhR215X86wsIY4MeWyDmsb4G2n3OgKSa/view?usp=sharing

### 3) home page

- slick slider라는 반응형 웹을 지원하는 슬라이더 라이브러리를 사용하여 캐러셀을 구현하였습니다.
- UI라이브러리를 직접 커스터마이징 하여 slick slider의 세부적인 요소를 수정하였습니다
- 회고 : 효율적인 컴포넌트 재사용방법과 컴포넌트를 어떻게 세분화 하는것이 좋을까에 대해 팀원들과 함께 고민하여 맞춰 갔고 여러가지 기능( react-query,infinite scroll 등)같은 많은것들을 배울 수 있는 좋은시간이였다.

### 4) now playing page 

- React Query로 서버로부터 가져온 데이터를 관리하였다.

- 데이터가 없는 경우엔 loading을 보이게 하였고 에러 발생 시 error alert가 나오게 하였다.

- 인피니트 스크롤을 추가함으로 한 번에 20개씩 영화 데이터가 보이게 하였다.
- 회고 : react-query를 사용할 때 어떻게 단축하면 좋을지 제대로 파악을 못한 부분을 이번 기회에 알게 됐다.
  추가로 팀원분들의 CSS 및 코드 단순화를 직접 따라해봄을 통해 새로운 방식을 경험할 수 있었다.

### 5) upcoming page & Infinite scroll

- 7팀이 선택한 캐싱을 위한 라이브러리는 react-query였습니다. 마침 react-query에서 인피니트 쿼리를 지원하는 것을 발견했고, 해당 함수를 활용해 구현했습니다. 공식 홈페이지에서도 해당 쿼리가 load more와 infinite scroll에 유용한 서포트를 해 준다고 소개하고 있습니다.
- 구현 방식은 useEffect에 scroll event를 등록 해 놓고, scroll의 위치를 탐지해서, 어느정도 내려왔다 판단되면 useInfinitequery의 반환인 fetchNextPage를 호출합니다.
  useInfiniteQuery는 getNextPageParam을 호출하는데 여기서 인수로 넘어가는 lastPage와 allPages로 최대 몇 페이지까지 보여줄 수 있는지와, 다음 페이지를 구할 수 있었습니다.

- 회고 : 마침 수업 때 useEffect() 이슈 중 하나인 의존성에 관해서 다뤄주셨었는데 이번에 저도 인피니트 스크롤을 구현하며 이슈가 발생했습니다. 최초에만 실행되도록 의존성을 주지 않아도 될 것이라 생각했었는데 의존성이 필요한 코드를 작성했습니다. 수업 직후 바로 이런 코드를 짰다고 생각하니 많이 아쉬우면서도 이건 의존성이 필요한거 같은데..? 라는 생각도 드네요. 이번 기회에 제공해주신 useEffect관련 글 정독하겠습니다.

### 6) top-rated page & 전역 스타일 설정 

- theme.js 스타일을 작성하여 팀원들과 공통으로 사용할 수있게 정의해주었다. 매번 쓰는 형식이 아니라, 많이 쓰는 스타일을 적어놓고 불러와서 사용하여 불필요하게 선언하던 것을 줄일 수 있다. 사용법은 `background: ${props => props.theme.colors.black};`이런식으로 원하는 값을 불러 올 수 있다.
- 회고 : 이틀만에 해야하는 과제로 정신적 압박감을 받는 과제였던것 같다. 하지만 예전과는 다르게 점점 어떤식으로 하면 재사용을 하면서 사용할까, 어떻게 해야 효율적일까 라는 생각을 하면서 개발을 하는 것같다. 또한 이전 두번의 과제를 했던 경험으로 팀원들과 협업을 하는 방식이 향상되는듯하다.

### 7) 영화 상세 페이지 

- 조회하고자 하는 영화의 정보가 나오는 상세페이지로 이동하기 위해 useParams를 사용했습니다.
- useQuery를 이용하여 api에서 정보를 fetch 해옵니다. 영화 id에 따른 동영상 정보도 가져와야 하기 때문에 2개의 useQuery()를 사용했습니다.
- `window.scrollTo` 를 이용하여 다른 페이지로 이동시 페이지 최상단으로 이동합니다.
- 비디오가 있는 경우, 페이지 진입 시 자동으로 비디오 플레이가 됩니다.
- 상세 페이지에는 제목, 포스터, 별점, 제작 연도, 장르, 줄거리가 나타납니다.
- 회고 : React Query를 처음 사용하고 적용해봤는데 데이터의 get요청이라고 할때 데이터, 데이터로딩여부, 에러 이 3가지를 판단하기 위해 기존에는 useEffect와 useState를 사용했다면, useQuery 하나로 작성할 코드 수를 줄여주는것이 좋은 것 같다. 그리고 css에서 레이아웃에 시간이 오래 걸렸다. 다음에는 css 디자인, 최적화에도 더 공을 들여보고 싶다.

### 8) 헤더 및 검색 페이지 & ScrollUp button 

- mui ui 라이브러리를 이용하여 헤더와 검색 페이지를 구현하고, 헤더에 검색input을 위치시켰습니다. 검색input에 키워드를 입력 후 enter를 누르면 useNavigate를 통해 /search url로 입력한 키워드를 전달합니다.
- 검색 페이지(/search)에서는 전달받은 키워드로 영화 리스트를 조회하고, 키워드 값이 변경될 때마다 refetch하도록 설정하여 영화 리스트를 갱신합니다.
- 영화 포스터 이미지는 getImage 공통 함수를 통해 포스터 경로가 없는 경우는 대체 이미지를 보여주도록 구현했습니다.
- useEffect를 사용하여 렌더링이 모두 완료되고 나서 scroll 이벤트를 추가하고 의존성을 추가하지 않음으로 첫 렌더링 시에만 실행되도록 합니다.
  스크롤Y가 100 이상이면 state를 true로, 그 이하는 false를 변경하여 scroll 버튼의 show/hide를 제어합니다.
  버튼을 클릭하면 window.scrollTo 로 top 0에 위치하도록 합니다.
- 회고 : 이번 프로젝트를 통해 react-query의 key를 사용하여 refetching을 적용해보는 좋은 경험을 했습니다.

### 9) Loading 상태 표기 - 모든 페이지

- 각 페이지 별로 캐시된 데이터가 없고 쿼리 시도가 아직 완료되지 않은 경우 mui 라이브러리의 `CircularProgress`를 이용하여 로딩스피너를 표현했다.

## 실행방법

```
npm i
npm start
```

---

## 라우팅

- /movie/popular : 현재 인기 영화 리스트 조회
- /movie/now_playing : 현재 상영작 리스트 조회
- /movie/upcoming : 개봉 예정작 리스트 조회
- /movie/top_rated : 인기 영화 리스트 조회
- /movie/:id : 영화에 대한 기본 정보 조회
- /search : 영화 검색

<details><summary>
API 명세
</summary>

1. home page

   - 사용 API: /movie/popular

2. now playing page

   - 사용 API: /movie/now_playing

3. upcoming page

   - 사용 API: /movie/upcoming

4. top-rated page

   - 사용 API: /movie/top_rated

5. 영화 상세 페이지

   - 사용 API: /movie/{movie_id}

6. 검색 페이지
   - 사용 API: /search/movie

</details>
