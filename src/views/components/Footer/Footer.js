export default class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
           <footer class="SiteFooter">
            <div class="SiteFooter__contact">
                <div class="SiteFooterContact__container Site__container">
                    <div class="SiteFooterContactItem">
                        <h2 class="SiteFooterContactItem__title">무신사 게섯거라 개발팀</h2>
                        <p class="SiteFooterContactItem__body">
                            서울특별시 강남구 테헤란로53길 16<br />
                            데마코홀 지하1층, 무신사 게섯거라 개발팀<br />
                            <span class="Text--blue">(프론트엔드: 박민수, 김도영)</span>
                            <br />
                            <span class="Text--blue">(백엔드: 임병준, 김주현)</span>
                            <br />
                        </p>
                    </div>
                    <div class="SiteFooterContactItem">
                        <h2 class="SiteFooterContactItem__title">게섯거라 스토어</h2>
                        <p class="SiteFooterContactItem__body">
                            서울특별시 강남구 테헤란로53길 16<br />
                            데마코홀 지하1층 미팅룸1 <br />
                            <span class="Text--red">(미팅 시간 끝나면 방문 불가) </span>
                        </p>
                    </div>
                    <div class="SiteFooterContactItem">
                        <h2 class="SiteFooterContactItem__title">고객센터</h2>
                        <div class="SiteFooterContactItem__body">
                            <div class="SiteFooterContactItem__links">
                                <a href="#" class="SiteFooterContactItem__link">1544 -7199</a>
                                <a href="#" class="SiteFooterContactItem__link">1:1문의</a>
                                <a href="#" class="SiteFooterContactItem__link">이메일</a>
                            </div>
                            <p>
                                평일 오전 9시 - 오전 9시 1분 <br />
                                <span class="Text--grey">(상품 문의는 민수한테 물어보세요)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SiteFooter__guarantee">
                <div class="SiteFooterGuarantee__container Site__container">
                    <div class="SiteFooterGuarantee__text">
                        <h3 class="SiteFooterGuarantee__title">100% NOT AUTHENTIC</h3>
                        <p class="SiteFooterGuarantee__caption">게섯거라 스토어에서 판매되는 모든 브랜드 제품은 짝퉁제조, 짝퉁수입원을 통해 유통되는 100% 짝퉁임을 보증합니다.</p>
                        <p class="SiteFooterGuarantee__body">
                            주식회사 무신사 게섯거라 (STOP MUSINSA Co., Ltd.) | 서울특별시 강남구 테헤란로53길 16 데마코홀 지하1층, 게섯거라 개발팀 | 사업자등록번호 : 없어용 <br />
                            통신판매업신고 : 없어용 | 프론트엔드 개발팀 : 박민수 김도영 | 백엔드 개발팀 : 임병준 김주현
                        </p>
                        <p class="SiteFooterGuarantee__body">
                            일부 상품의 경우 주식회사 무신사 게섯거라는 통신판매의 당사자가 아닌 개발팀으로서 <br />
                            상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 저희 팀 팀장인 민수한테 상세히 물어보고 상품을 구매하시기 바랍니다.
                        </p>
                    </div>
                    <div class="SiteFooterGuarantee__images">
                        <img class="SiteFooterGuarantee__image" src="../../assets/images/kcp.png" alt="KCP" />
                        <img class="SiteFooterGuarantee__image" src="../../assets/images/ftc.png" alt="FTC" />
                    </div>
                </div>
            </div>
            <div class="SiteFooter__bottom">
                <div class="Site__container">FASHION WEB MAGAZINE / TO STOP MUSINSA <span class="SiteFooterBottom__URL">WWW.STOPMUSINSA.COM</span></div>
            </div>
            <div class="SiteFooter__mobile Site__container">
                일부 상품의 경우 주식회사 무신사 게섯거라는 통신판매의 당사자가 아닌 개발팀으로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인
                내용을 확인하시기 바랍니다.
            </div>
        </footer>
    `;

    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/Footer/Footer.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('common-footer', Footer);
