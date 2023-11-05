/* 후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.
 */

const solution = (s) => {
  let answer;
  let stack = [];
  for (let x of s) {
    // 숫자면 스택에 number화 해서 넣기
    if (!isNaN(x)) stack.push(Number(x));
    else {
      // 숫자가 아니면 숫자 스택에서 2개 꺼내서 좌측 피연산자, 우측 피연산자 변수로 설정
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
};

let str = "352+*9-";
console.log(solution(str));
