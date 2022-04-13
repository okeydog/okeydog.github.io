const qnaList = [
  {
    q: '1. 사람들이 인사하면 반려견이 편안해하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
  {
    q: '4. 반려견이 종종 파괴적인 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
  {
    q: '10. 반려견이 종종 무기력한 모습을 보이나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
      {
    q: '19. 반려견이 자신감 있는 편에 속하나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
      {
    q: '34. 반려견이 다른 개와 노는 데 무리가 없나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
    q: '36. 반려견이 다른 강아지에게 인사할 때 복종하려 하나요?',
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
     {
    q: '45. 반려견의 훈련 습득이 느린가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
      {
    q: '50. 반려견의 행동 교정이 느린가요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
    ]
  },
      {
    q: '69. 반려견이 차분한 경향이 있나요?',
    a: [
      { answer: '전혀 그렇지 않다', score: 7 },
      { answer: '대체로 그렇지 않다', score: 6 },
      { answer: '약간 그렇지 않다', score: 5 },
      { answer: '보통이다', score: 4 },
      { answer: '약간 그렇다', score: 3 },
      { answer: '대체로 그렇다', score: 2 },
      { answer: '매우 그렇다', score: 1 }
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
    mLeft: '0',
    name: '천사의 탈을 쓴 악마犬',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '1',
    name: '오지랖 넓은 중재자',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '2',
    name: '제멋대로 마이웨이犬',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '3',
    name: '허세 부리는 상꼬맹이',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '4',
    name: '눈치 빠른 꼬맹이',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '5',
    name: '천진난만한 탐험대원',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '6',
    name: '자유로운 영혼',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '7',
    name: '호기심 많은 쫄보',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '8',
    name: '눈치보는 쭈구리',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '9',
    name: '정석의 엄친아犬',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 10,
    to: 20,
    mLeft: '10',
    name: '무념무상 창문바라기',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '11',
    name: '방구석의 겁쟁이',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '12',
    name: '뻔뻔한 밀당 고수',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '13',
    name: '우리집 꼬마 대장',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '14',
    name: '고독한 카리스마',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
      {
    from: 10,
    to: 20,
    mLeft: '15',
    name: '까칠한 얼음공주',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
]