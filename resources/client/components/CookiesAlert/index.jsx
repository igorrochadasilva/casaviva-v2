import React from 'react'

import '../../../assets/scss/components/CookiesAlert/index.scss';

const CookiesAlert = () => {
    return (
        <div id="cookiesAlert" class="show" data-v-d81c723e="">
            <div class="el-row is-justify-center is-align-middle el-row--flex">
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-18">
                    <p>
                        Usamos cookies para ajudar a personalizar conteúdo, adaptar e medir anúncios e oferecer uma experiência mais segura. Ao navegar no site, você concorda com o uso de cookies para coletar informações.
                        <a href="/politica-de-cookies" class="">
                            Leia nossa Política de cookies.
                        </a>
                    </p>
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-6">
                    <div class="wrapButtons">
                        <a class="btn-primary-red">
                            Eu aceito
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiesAlert
