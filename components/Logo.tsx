import React from 'react'

export default function Logo({white}:{white?:boolean}) {
  return (
    <svg className="header__logo" width="76" height="52" viewBox="0 0 76 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.7868 38.6484V39.1696H9.1801L7.56221 46.7471H6.71283L4.93316 39.3701H4.89271L3.07259 46.7471H2.2232L0.605321 39.1696H0.0390625V38.6484H2.34454V39.1696H1.25247L2.66812 45.9854L4.44779 38.6484H5.37807L7.1173 45.9854H7.15774L8.57339 39.1696H7.48132V38.6484H9.7868Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.0703 42.6178C10.0703 41.3348 10.3939 40.3325 11.0006 39.6109C11.6073 38.8892 12.4971 38.4883 13.6297 38.4883C14.7622 38.4883 15.652 38.8491 16.2587 39.6109C16.8654 40.3325 17.189 41.3348 17.189 42.6178C17.189 43.4598 17.0676 44.1814 16.7845 44.8229C16.5014 45.4644 16.0969 45.9455 15.5711 46.3063C15.0453 46.6671 14.3981 46.8275 13.6297 46.8275C12.8612 46.8275 12.214 46.6671 11.6882 46.3063C11.1624 45.9455 10.7579 45.4644 10.4748 44.8229C10.1917 44.2215 10.0703 43.4598 10.0703 42.6178ZM10.7579 42.6178C10.7579 43.3395 10.8388 44.021 11.041 44.5422C11.2433 45.1035 11.5669 45.5446 11.9713 45.8252C12.4162 46.1459 12.9421 46.3063 13.5892 46.3063C14.5599 46.3063 15.2475 45.9856 15.7329 45.304C16.2183 44.6224 16.4609 43.7404 16.4609 42.6178C16.4609 41.9763 16.3396 41.3749 16.1374 40.8136C15.9351 40.2524 15.6116 39.8514 15.1666 39.5307C14.7217 39.2099 14.1959 39.0496 13.5488 39.0496C12.9016 39.0496 12.3758 39.2099 11.9309 39.5307C11.486 39.8514 11.2028 40.2924 11.0006 40.8136C10.8388 41.3348 10.7579 41.9362 10.7579 42.6178Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.7188 46.7471V46.1858H18.6895V39.1696H17.7188V38.6484H19.6602L23.7049 46.1858H23.7454V39.1696H22.6128V38.6484H25.3228V39.1696H24.3521V46.7471H23.3813L19.3366 39.1696H19.2962V46.1858H20.4287V46.7471H17.7188Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M26.2109 46.7482V46.1869H27.2221V39.1707H26.2109V38.6094H28.84C30.1343 38.6094 31.105 38.9301 31.8331 39.5315C32.5611 40.1329 32.8847 41.1753 32.8847 42.5384C32.8847 44.0219 32.5611 45.1044 31.8735 45.7458C31.1859 46.3873 30.1747 46.7081 28.84 46.7081H26.2109V46.7482ZM27.8693 39.1707V46.1869H28.7187C29.4871 46.1869 30.1343 46.0666 30.6197 45.826C31.1455 45.5855 31.5095 45.2246 31.7926 44.6633C32.0353 44.1421 32.1971 43.4205 32.1971 42.5384C32.1971 41.2956 31.914 40.4536 31.3073 39.9324C30.741 39.4112 29.8512 39.1306 28.7187 39.1306H27.8693V39.1707Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M33.25 46.7471V46.1858H34.2207V39.1696H33.25V38.6484H39.0339V41.1743H38.5081V39.1696H34.8679V42.377H36.7689V41.1743H37.3352V44.2213H36.7689V42.9383H34.8679V46.1858H38.5486V44.2213H39.1148V46.7471H33.25Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M40.2891 46.7482V46.1869H41.3002V39.1707H40.2891V38.6094H43.0395C43.6462 38.6094 44.1315 38.6495 44.5764 38.7297C44.9809 38.8098 45.3449 39.0103 45.6281 39.331C45.9112 39.6518 46.073 40.1329 46.073 40.7343C46.073 41.4159 45.9516 41.897 45.6685 42.1776C45.3854 42.4583 44.9809 42.6587 44.4551 42.779V42.8191C44.7382 42.8993 44.9405 42.9795 45.0214 43.0596C45.1427 43.1398 45.2236 43.2601 45.3045 43.4205C45.3854 43.5808 45.5067 43.9417 45.6685 44.4629L46.1943 46.1468H47.1651V46.7081H45.6281L44.9405 44.3025C44.8191 43.9016 44.7382 43.5808 44.6573 43.4606C44.5764 43.3002 44.4551 43.22 44.2529 43.1398C44.0506 43.0596 43.7271 43.0596 43.2821 43.0596H42.0283V46.1869H43.0395V46.7482H40.2891ZM41.9069 39.1707V42.5384H43.1608C43.6057 42.5384 43.9697 42.4984 44.2933 42.4182C44.6169 42.338 44.8596 42.1776 45.0618 41.897C45.264 41.6564 45.3449 41.2555 45.3449 40.7343C45.3449 40.2532 45.264 39.8923 45.0618 39.6518C44.9 39.4112 44.6573 39.2509 44.3338 39.2108C44.0506 39.1306 43.6462 39.1306 43.1608 39.1306H41.9069V39.1707Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M56.3024 38.6484V39.1696H55.7362L54.0778 46.7471H53.2285L51.4488 39.3701L49.5882 46.7471H48.7388L47.1209 39.1696H46.5547V38.6484H48.8602V39.1696H47.7681L49.1837 45.9854L50.9634 38.6484H51.8937L53.6329 45.9854H53.6734L55.1295 39.1696H53.9969V38.6484H56.3024Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M60.6685 43.3403L59.172 39.2909L57.6754 43.3403H60.6685ZM55.2891 46.7482V46.1869H55.9362L58.808 38.6094H59.6169L62.4077 46.1869H63.0549V46.7482H60.5472V46.1869H61.6797L60.8303 43.8615H57.4328L56.5834 46.1869H57.7159V46.7482H55.2891Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M63.8281 46.7471V46.1858H64.8393V39.1696H63.8281V38.6484H66.8212V39.1696H65.446V46.1858H68.884V44.3416H69.4503V46.7471H63.8281Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M70.2969 46.7471V46.1858H71.3485V39.1696H70.2969V38.6484H73.2899V39.1696H71.9552V46.1858H75.3527V44.3416H75.919V46.7471H70.2969Z" fill={white ? "white" : "#595B60"}></path>
        <path d="M75.9972 35.8027H0.078125V36.364H75.9972V35.8027Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 50.1562H29.5263V50.7175H0V50.1562ZM46.3523 50.1562H75.9191V50.7175H46.3523V50.1562Z" fill={white ? "white" : "#595B60"}></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M43.4435 50.5156C43.4435 50.6359 43.4435 50.7562 43.4839 50.8363C43.4839 50.9566 43.5243 51.0368 43.5648 51.117C43.6052 51.1972 43.6457 51.2774 43.6861 51.3575C43.7266 51.4377 43.767 51.4778 43.8479 51.5179C43.9288 51.558 43.9693 51.5981 44.0502 51.6382C44.1311 51.6783 44.2119 51.6783 44.3333 51.6783C44.4951 51.6783 44.6164 51.6382 44.6973 51.5981C44.8187 51.558 44.8995 51.4778 44.94 51.3575C45.0209 51.2373 45.0613 51.117 45.1018 50.9967C45.1422 50.8764 45.1422 50.7161 45.1422 50.5156C45.1422 50.3953 45.1422 50.3151 45.1018 50.235C45.1018 50.1548 45.0613 50.0746 45.0209 49.9543C44.9804 49.8741 44.94 49.7939 44.8995 49.7538C44.8591 49.6737 44.7782 49.6336 44.7378 49.5935C44.6569 49.5534 44.6164 49.5133 44.5355 49.4732C44.4546 49.4331 44.3737 49.4331 44.2928 49.4331C44.2119 49.4331 44.0906 49.4331 44.0097 49.4732C43.9288 49.5133 43.8479 49.5133 43.8075 49.5935C43.7266 49.6336 43.6861 49.7137 43.6457 49.7538C43.6052 49.834 43.5648 49.8741 43.5243 49.9543C43.4839 50.0345 43.4839 50.1147 43.4435 50.235C43.4435 50.3151 43.4435 50.3953 43.4435 50.5156ZM43.039 50.5156C43.039 50.3151 43.0794 50.1147 43.1199 49.9543C43.1603 49.7939 43.2412 49.6336 43.3626 49.5133C43.4839 49.393 43.6052 49.2727 43.767 49.2326C43.9288 49.1525 44.0906 49.1524 44.2928 49.1524C44.4951 49.1524 44.6569 49.1925 44.8187 49.2326C44.9804 49.3128 45.1018 49.393 45.2231 49.5133C45.3445 49.6336 45.4254 49.7939 45.4658 49.9543C45.5063 50.1147 45.5467 50.3151 45.5467 50.5156C45.5467 50.676 45.5467 50.7962 45.5063 50.9165C45.4658 51.0368 45.4658 51.1571 45.3849 51.2774C45.3445 51.3976 45.2636 51.4778 45.2231 51.558C45.1422 51.6382 45.0613 51.7184 44.9804 51.7986C44.8995 51.8787 44.7782 51.9188 44.6569 51.9589C44.5355 51.999 44.4142 51.999 44.2928 51.999C44.1715 51.999 44.0502 51.999 43.9288 51.9589C43.8075 51.9188 43.7266 51.8787 43.6052 51.7986C43.5243 51.7184 43.4435 51.6783 43.3626 51.558C43.2817 51.4778 43.2412 51.3575 43.2008 51.2774C43.1603 51.1571 43.1199 51.0368 43.0794 50.9165C43.039 50.7962 43.039 50.676 43.039 50.5156ZM41.5424 51.8787V51.7184V51.6382H41.6233H41.866V49.5133H41.6233H41.5424V49.4331V49.2727V49.1925H41.6233H42.5132H42.5941V49.2727V49.4331V49.5133H42.4727H42.23V51.6382H42.4727H42.5536V51.7184V51.8787V51.9589H42.4727H41.5829H41.502V51.8787H41.5424ZM39.3987 49.4732V51.5981H39.601C39.7223 51.5981 39.8437 51.5981 39.9246 51.558C40.0055 51.558 40.1268 51.5179 40.1672 51.4778C40.2481 51.4377 40.2886 51.3976 40.3695 51.3575C40.4099 51.3175 40.4908 51.2373 40.5313 51.1571C40.5717 51.0769 40.6122 50.9967 40.6122 50.8764C40.6526 50.7562 40.6526 50.6359 40.6526 50.5156C40.6526 50.3151 40.6122 50.1548 40.5717 50.0345C40.5313 49.9142 40.4504 49.7939 40.3695 49.7137C40.2886 49.6336 40.1672 49.5935 40.0459 49.5534C39.9246 49.5133 39.7628 49.4732 39.5605 49.4732H39.3987ZM38.6707 51.8787V51.7184V51.6382H38.7516H38.9943V49.5133H38.7516H38.6707V49.4331V49.2727V49.1925H38.7516H39.6414C39.8437 49.1925 40.0459 49.2326 40.2077 49.2727C40.3695 49.3128 40.5313 49.393 40.6526 49.5133C40.7739 49.6336 40.8548 49.7538 40.9357 49.9543C41.0166 50.1147 41.0166 50.3151 41.0166 50.5557C41.0166 50.7962 40.9762 51.0368 40.9357 51.1972C40.8953 51.3976 40.7739 51.5179 40.6526 51.6382C40.5313 51.7585 40.3695 51.8387 40.2077 51.8787C40.0459 51.9188 39.8437 51.9589 39.601 51.9589H38.7516H38.6707V51.8787ZM35.7585 49.393V49.2326V49.1524H35.8394H36.7292H36.8101V49.2326V49.393V49.4732H36.7292H36.4461V50.7161C36.4461 50.8363 36.4461 50.9165 36.4461 50.9967C36.4461 51.0769 36.4866 51.1571 36.4866 51.2373C36.4866 51.3175 36.527 51.3575 36.5675 51.3976C36.6079 51.4377 36.6483 51.4778 36.6888 51.5179C36.7292 51.558 36.7697 51.5981 36.8506 51.5981C36.891 51.5981 36.9719 51.6382 37.0528 51.6382C37.1742 51.6382 37.2551 51.6382 37.3359 51.5981C37.4168 51.558 37.4573 51.5179 37.4977 51.4377C37.5382 51.3575 37.5786 51.2774 37.6191 51.1571C37.6595 51.0368 37.6595 50.9165 37.6595 50.7562V49.5133H37.3764H37.2955V49.4331V49.2727V49.1925H37.3764H38.2662H38.3471V49.2727V49.4331V49.5133H38.2662H38.0235V50.7562C38.0235 50.9566 38.0235 51.117 37.9831 51.2774C37.9427 51.4377 37.9022 51.558 37.8213 51.6783C37.7404 51.7986 37.6595 51.8787 37.4977 51.9188C37.3764 51.9589 37.2146 51.999 37.0528 51.999C36.891 51.999 36.7292 51.9589 36.6079 51.9188C36.4866 51.8787 36.3652 51.7585 36.2843 51.6783C36.163 51.4778 36.0821 51.1571 36.0821 50.7562V49.5133H35.8799H35.799V49.393H35.7585ZM33.6957 51.8787V51.7184V51.6382H33.7766H34.1002V49.5133H33.5339V50.0345V50.1147H33.453H33.2912H33.2103V50.0345V49.2326V49.1524H33.2912H35.3136H35.3945V49.2326V50.0345V50.1147H35.3136H35.1114H35.0305V50.0345V49.5133H34.4642V51.6382H34.7878H34.8687V51.7184V51.8787V51.9589H34.7878H33.7766H33.6957V51.8787ZM32.2396 49.2727V49.2326V49.1524H32.3205H32.5227H32.6036V49.2326V50.1147V50.1949H32.5227H32.3205H32.2396V50.1147C32.2396 49.9944 32.2396 49.9142 32.1992 49.7939C32.1587 49.7137 32.1587 49.6336 32.1183 49.5935C32.0374 49.5133 31.916 49.4331 31.7138 49.4331C31.6734 49.4331 31.5925 49.4331 31.552 49.4732C31.5116 49.5133 31.4711 49.5133 31.3902 49.5534C31.3498 49.5935 31.3093 49.6336 31.3093 49.6737C31.2689 49.7137 31.2689 49.7939 31.2689 49.834C31.2689 49.9142 31.2689 49.9543 31.3093 49.9944C31.3093 50.0345 31.3498 50.0746 31.3902 50.0746C31.4307 50.1147 31.5116 50.1548 31.5925 50.1548C31.6734 50.1949 31.7947 50.235 31.916 50.275C32.0374 50.3151 32.1587 50.3552 32.2396 50.3953C32.3205 50.4354 32.4014 50.5156 32.4823 50.5557C32.5632 50.6359 32.6036 50.7161 32.6441 50.7962C32.6845 50.8764 32.6845 50.9967 32.6845 51.117C32.6845 51.1972 32.6845 51.2774 32.6441 51.3575C32.6036 51.4377 32.6036 51.4778 32.5632 51.558C32.5227 51.6382 32.4823 51.6783 32.4419 51.7184C32.4014 51.7585 32.3205 51.7986 32.2801 51.8387C32.1992 51.8787 32.1587 51.8787 32.0778 51.9188C31.9969 51.9188 31.9565 51.9589 31.8756 51.9589C31.7138 51.9589 31.552 51.9188 31.4307 51.8387C31.3902 51.7986 31.3093 51.7585 31.2689 51.7184V51.7986V51.8787H31.188H31.0262H30.9453V51.7986V50.9165H31.0262H31.188H31.2689V50.9967C31.2689 51.117 31.2689 51.1972 31.3093 51.2774C31.3498 51.3575 31.3902 51.4377 31.4307 51.4778C31.5116 51.5981 31.6734 51.6382 31.8351 51.6382C31.916 51.6382 31.9565 51.6382 32.0374 51.5981C32.0778 51.558 32.1587 51.558 32.1992 51.5179C32.2396 51.4778 32.2801 51.4377 32.3205 51.3976C32.361 51.3575 32.361 51.2774 32.361 51.1972C32.361 51.117 32.361 51.0769 32.3205 51.0368C32.2801 50.9967 32.2801 50.9566 32.2396 50.9165C32.1992 50.8764 32.1183 50.8363 32.0374 50.7962C31.9565 50.7562 31.8756 50.7161 31.7543 50.676C31.6329 50.6359 31.5116 50.5958 31.4307 50.5557C31.3498 50.5156 31.2689 50.4755 31.188 50.3953C31.1071 50.3552 31.0667 50.275 31.0262 50.1548C30.9858 50.0746 30.9858 49.9543 30.9858 49.8741C30.9858 49.7939 30.9858 49.7137 31.0262 49.6737C31.0262 49.5935 31.0667 49.5534 31.1071 49.4732C31.1475 49.4331 31.188 49.3529 31.2284 49.3128C31.2689 49.2727 31.3498 49.2326 31.3902 49.1925C31.4711 49.1524 31.5116 49.1525 31.5925 49.1124C31.6734 49.1124 31.7138 49.0723 31.7947 49.0723C31.9565 49.0723 32.1183 49.1124 32.1992 49.1524C32.1587 49.1925 32.1992 49.2326 32.2396 49.2727Z" fill={white ? "white" : "#595B60"}></path>
        <path className="logo-color-path" fillRule="evenodd" clipRule="evenodd" d="M21.6797 16.3181V28.0251L37.4136 15.0752V3.32812L21.6797 16.3181Z" fill={white ? "white" : "#C62224"}></path>
        <path className="logo-color-path" fillRule="evenodd" clipRule="evenodd" d="M55.6953 16.3169V28.0239L71.227 15.2344V3.52734L55.6953 16.3169Z" fill={white ? "white" : "#C62224"}></path>
        <path className="logo-outline-path" fillRule="evenodd" clipRule="evenodd" d="M4.4463 2.76638V15.5158L20.7869 28.9468V16.1974C15.2861 11.7471 9.86621 7.25675 4.4463 2.76638ZM54.8029 16.1974V28.9468L38.26 15.3153V2.56592C43.7608 7.13647 49.2616 11.6669 54.8029 16.1974ZM55.2478 16.1974L71.5884 2.76638V15.5158L55.2478 28.9468V16.1974ZM21.2318 16.1974C26.7326 11.6669 32.2739 7.09638 37.7747 2.56592V15.3153L21.2318 28.9468V16.1974ZM3.96094 2.36546L5.41703 1.16268L20.9891 13.9923L38.0174 0L55.0051 14.0324L70.5772 1.20278L72.0333 2.40555V15.7163L55.0051 29.7486L38.0174 15.6762L20.9891 29.7086L3.96094 15.6762V2.36546Z" fill={white ? "white" : "#595B60"}></path>
    </svg>
  )
}
