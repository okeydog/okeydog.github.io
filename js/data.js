const qnaList = [
  {
    q: '1. 사람들이 인사하면 반려견이 편안해하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '2. 반려견이 방해를 받으면 반려견이 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '3. 반려견이 다른 강아지에게 관심이 없나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '4. 반려견이 종종 파괴적인 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '5. 반려견이 다른 강아지에게 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '6. 반려견이 종종 불안한 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '7. 반려견이 칭찬을 좋아하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '8. 다른 강아지으로부터 위협을 받을 경우 반려견이 공격적으로 반응하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '9. 반려견이 대담한 편에 속하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
  {
    q: '10. 반려견이 종종 무기력한 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
    {
    q: '11. 반려견을 부르면 바로 보호자에게 오나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '12. 반려견이 수줍음이 많은 편에 속하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '13. 반려견이 낯선 사람에게 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '14. 반려견은 대게 보상을 얻고자 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '15. 반려견이 다람쥐나 새와 같은 작은 동물 쫓기를 좋아하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '16. 반려견이 놀이를 하면 빨리 지루해하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '17. 반려견은 제지를 받을 경우 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '18. 문이 열려있으면 반려견이 빠져나가려 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '19. 반려견이 자신감 있는 편에 속하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '20. 반려견이 종종 지배적인 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '21. 반려견이 종종 다른 강아지를 피하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '22. 반려견이 다른 동물을 죽인 적이 있나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '23. 다른 사람이 집에 오면 반려견이 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '24. 반려견이 넘어지거나 무언가 스치면 쉽게 놀라나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '25. 반려견이 물건을 집요하게 물어뜯나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '26. 고양이가 보이면 반려견이 흥분하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '27. 반려견은 사나운 편에 속하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '28. 반려견이 병원 가는 것을 무서워하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '29. 반려견이 종종 목줄을 당기나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '30. 반려견이 사람 많은 것을 무서워하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '31. 반려견이 종종 장난감을 가지고 노나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '32. 반려견을 혼낼 경우 반려견이 쉽게 화를 내나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '33. 처음 보는 사람에게도 반려견이 친근하게 다가가나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '34. 반려견이 다른 개와 노는 데 무리가 없나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '35. 반려견이 사람에게서 유대감을 느끼려고 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '36. 반려견이 다른 강아지에게 인사할 때 매너를 지키나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '37. 반려견이 보호자의 말과 행동에 주의를 기울이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '38. 반려견이 새로운 환경에 잘 적응을 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '39. 반려견이 사람(자전거, 조깅, 스케이트 등) 쫓아가기를 좋아하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '40. 반려견이 호기심이 많나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '41. 반려견이 다른 강아지로부터 음식을 지키려고 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '42. 반려견이 통증에 민감한가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '43. 반려견이 사람에게 위협을 느낄 때 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '44. 반려견이 냉담한 성격인가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
     {
    q: '45. 반려견의 훈련 습득이 느린가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '46. 반려견이 터깅(줄다리기)를 좋아하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '47. 반려견이 낯선 사람을 보면 겁을 먹나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '48. 반려견의 경계심이 많나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '49. 반려견이 다른 강아지와 장난감을 공유하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '50. 반려견의 행동 교정이 느린가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '51. 반려견이 수의사를 만나면 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '52. 반려견이 자주 뛰어오르거나 다른 강아지에게 올라타나요?(교배 제외)',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '53. 반려견이 계속 움직이기를 좋아하나요? ',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '54. 반려견이 아이들에게 겁을 먹나요??',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '55. 누군가가 집에 오면 반려견이 흥분하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '56. 반려견에게 물건이나 음식을 가만히 두라고 하면 실제로 그렇게 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '57. 반려견은 다른 개에게 공격하거나 시도하는 경향이 있나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '58. 반려견은 놀라거나 겁먹고 나서 빠르게 진정하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '59. 공이나 장난감을 다른 데 두었을 때 반려견이 그것을 잘 찾아오나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '60. 반려견은 다른 강아지에게 친절한가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '61. 반려견에게 제지를 하면 무섭게 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '62. 반려견은 자신이 탐내는 물건을 필사적으로 지키나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '63. 반려견이 다정한가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '64. 반려견이 보호자의 명령을 무시하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '65. 반려견은 고양이에게 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '66. 반려견이 다른 사람으로부터 위협을 받을 경우 겁에 질려 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '67. 반려견이 주위 사람을 잘 따라가나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '68. 반려견은 긴장하면 공격성을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '69. 반려견이 차분한 경향이 있나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '70. 반려견이 다른 강아지를 보면 겁에 질려하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '71. 산만한 상황에서도 반려견이 높은 집중력을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '72. 반려견이 다른 강아지를 보면 흥분하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '73. 반려견이 아이들에게 공격적으로 행동하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '74. 반려견이 손톱을 깎거나 귀 청소를 할 때 겁에 질려하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '75. 반려견이 다른 강아지에게 독단적이거나 강압적인가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '76. 집 안에서 돌아다닐 때 보호자나 가족 구성원을 따라다니나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '77. 보호자가 앉아있으면 반려견도 가까이 있으려고 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '78. 보호자가 앉아있으면 반려견이 관심 끄는 행동을 하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
     {
    q: '79. 보호자가 다른 사람 혹은 동물에게 애정 표현하면 반려견이 동요된 모습을 보이나요? ',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  },
      {
    q: '80. 가족 구성원 중 한 사람에게만 강한 애착을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 1 },
      { answer: '대체로 그렇지 않다', score: 2 },
      { answer: '약간 그렇지 않다', score: 3 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 5 },
      { answer: '대체로 그렇다', score: 6 },
      { answer: '매우 그렇다', score: 7 }
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '10%',
    name: '토끼',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '25%',
    name: '고양이',
    desc: '사람들은 당신이 꼼꼼하고 철저하다고 생각합니다. 심지어 종종 신경질적이라고 생각할 때도 있죠. 하지만 노력이 결실을 맺을 때 당신은 칭찬을 기쁘게 받아들입니다. (이것은 자기 자신을 받아들인다는 긍정적인 의미입니다.) 만약 당신이 충동적으로 행동한다면 사람들은 정말 놀랄 겁니다. 신중하게 행동하는 것은 대개 지혜를 드러내게 마련입니다. 당신은 친구들이 당신에게 조언을 구할 만큼 믿음직한 사람입니다.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '40%',
    name: '표범',
    desc: '사람들은 당신이 분별 있고 현실적이며 겸손하다고 생각합니다. 당신은 당신에게 향하는 신뢰와 충성에 보답하는 사람으로 정평이 나 있습니다. 당신을 잘 아는 사람이라면 당신이 친구들에게 갖는 믿음을 깨거나 친구 사이를 이간질하기 어렵다는 걸 알 겁니다. 하지만 그 신뢰가 깨진다면, 당신은 꽤 큰 영향을 받습니다.'
  },
  {
    from: 41,
    to: 50,
    mLeft: '55%',
    name: '알파카',
    desc: '사람들은 당신이 생기 넘치고 매력적인 한편 현실적이기도 하다고 생각합니다. 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각하죠. 또한 당신이 언제나 친구들을 위하는 이해심 많고 사려깊은 사람이라고 생각합니다.'
  },
  {
    from: 51,
    to: 60,
    mLeft: '70%',
    name: '유니콘',
    desc: '사람들은 당신이 흥분을 잘 하고 다소 충동적이라고 생각합니다. 하지만 당신은 타고난 리더입니다! 의사 결정도 빠르게 내리죠. 사람들은 당신을 대범하고 모험심이 강한 사람으로 생각합니다. 또한 당신의 열정을 인정하고 높이 사기 때문에 당신의 동료, 친구로서 지내기를 좋아합니다.'
  },
  {
    from: 61,
    to: 70,
    mLeft: '85%',
    name: '사자',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  }
]