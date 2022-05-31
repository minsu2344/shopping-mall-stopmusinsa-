export default class Header extends HTMLElement {
  constructor() {
    super();
    // html 추가
    this.innerHTML = `
            <header class="SiteHeader">
            <div class="SiteHeader__main">
                <div class="SiteHeaderMain__container Site__container">
                    <div class="SiteHeaderMain__left">
                        <h1 class="SiteHeaderMain__logo">
                            <a class="SiteHeaderMain__logoLink" href="">STOP MUSINSA</a>
                        </h1>
                        <input class="SiteHeaderMain__search" />
                    </div>
                    <div class="SiteHeaderMain__right">
                        <nav class="SiteHeaderMainNav">
                            <ul class="SiteHeaderMainNav__list">
                                <li class="SiteHeaderMainNavItem">
                                    <a class="SiteHeaderMainNavItem__link SiteHeaderMainNavItem__link--active" href="#">홈</a>
                                    <div class="SiteHeaderMainNavItem__underbar"></div>
                                </li>
                                <li class="SiteHeaderMainNavItem">
                                    <a class="SiteHeaderMainNavItem__link" href="#">상의</a>
                                </li>
                                <li class="SiteHeaderMainNavItem">
                                    <a class="SiteHeaderMainNavItem__link" href="#">바지</a>
                                </li>
                                <li class="SiteHeaderMainNavItem">
                                    <a class="SiteHeaderMainNavItem__link" href="#">아우터</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="SiteHeader__sub">
                <div class="SiteHeaderSub__container Site__container">무신사 게섯거라</div>
            </div>
            <div class="SiteHeader__member">
                <div class="SiteHeaderMember__container Site__container">
                    <button class="Button Button--outline">로그인</button>
                    <div class="SiteHeaderMemberMenus">
                        <div class="SiteHeaderMemberMenu">
                            <a class="SiteHeaderMemberMenu__link" href="#">회원가입</a>
                        </div>
                        <div class="SiteHeaderMemberMenu">
                            <a class="SiteHeaderMemberMenu__link" href="#">장바구니</a>
                            <span class="SiteHeaderMemberMenu__badge">0</span>
                        </div>
                        <div class="SiteHeaderMemberMenu">
                            <a class="SiteHeaderMemberMenu__link" href="#">회원 가입 EVENT. 신규 가입 후 바로 사용 가능한 18% 할인 쿠폰 / 게섯거라 스탠다드 990원 구매 기회</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SiteHeaderMobileMain">
                <div class="SiteHeaderMobileMain__container Site__container">
                    <div>
                        <a href="#" class="SiteHeaderMobileMain__icon SiteHeaderMobileMain__cart">
                            <img src="../../assets/images/shopping_bag.png" alt="cart" />
                        </a>
                    </div>
                    <div>
                        <div class="SiteHeaderMobileMain__logo">
                            <a class="SiteHeaderMobileMain__logoLink" href="">STOP MUSINSA</a>
                        </div>
                    </div>
                    <div>
                        <a href="#" class="SiteHeaderMobileMain__profile">
                            <img src="../../assets/images/profile.png" alt="profile" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    `;
    // css 파일 추가
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '/src/views/components/Header/Header.css');
    this.appendChild(linkElem);
  }
}
window.customElements.define('common-header', Header);
