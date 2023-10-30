import React from 'react'

const Image = ( props ) => {
  return (
    <section id="imageType" className={`image__wrap ${props.element}`}>
        <h2>{props.title}</h2>
        <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나오는 구조입니다.</p>
        <div className="image__inner container">
            <article  className="image img1">
                <h3 className="image__tilte">강아지계의 연예인</h3>
                 <p className="image__desc">최근 연예인들 사이에서 키우는 강아지로 유명해진 비숑프리제는 생김새가 아주 작은 바시과 매우 흡사하여 바비숑이라고 불립니다.</p>
                 <a href="/" className="image__btn yellow">자세히 보기</a>
            </article >
            <article  className="image img2">
                <h3 className="image__tilte">강아지계의 마스코트</h3>
                 <p className="image__desc">최근 연예인들 사이에서 키우는 강아지로 유명해진 비숑프리제는 생김새가 아주 작은 바시과 매우 흡사하여 바비숑이라고 불립니다.</p>
                 <a href="/" className="image__btn blue">자세히 보기</a>
            </article >
        </div>
    </section>
  )
}

export default Image