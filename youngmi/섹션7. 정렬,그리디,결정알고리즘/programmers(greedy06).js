/* 단속카메라
문제 설명
고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 
모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 
최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

제한사항
- 차량의 대수는 1대 이상 10,000대 이하입니다.
- routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, 
	routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
- 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
- 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.
 */

/* 
이전 차량의 진출 시점 < 현재 차량의 진입 시점 이 되는 순간 두 차량은 접점이 없기 때문에 각각 카메라가 필요
*/

const solution = (routes) => {
  let answer = 1; // 1번 관점으로 접근

  routes.sort((a, b) => a[0] - b[0]);
  // 진입 시점을 기준으로 오름차순 정렬

  let out = routes[0][1];
  // 첫 진출시점(out)은 첫 차량의 진출시점으로 초기화

  for (let i = 1; i < routes.length; i++) {
    // 진출시점보다 현재 차량의 진입이 느리다면
    // 카메라 추가 설치 및 out 시점 갱신
    if (out < routes[i][0]) {
      answer++;
      out = routes[i][1];
    }

    // 진출시점이 현재 차량의 진출시점보다 큰 경우
    // 항상 out을 갱신해주어야
    // 다음 차량 카메라 설치 여부 판별 가능
    if (out > routes[i][1]) {
      out = routes[i][1];
    }
  }

  return answer;
};

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
); // 2
