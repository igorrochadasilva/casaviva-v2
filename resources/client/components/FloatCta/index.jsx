import React from 'react'

import '../../../assets/scss/components/FloatCta/index.scss';

const FloatCta = () => {
    return (
        <div data-v-d81c723e="">
            <div id="floatCta">
                <div class="wrapper">
                    <a href="/simulador" class="hidden-sm-and-up btn-primary-red">
                        Simule Agora
                    </a>
                    <ul class="initial">
                        <li>
                            <i class="cv-icons cv-chat-o"></i>
                            <span>Atendimento</span>
                        </li>
                    </ul>
                    <ul class="menuFloat">
                        <li>
                            <i class="cv-icons cv-whatsapp"></i>
                            <span>WhatsApp</span>
                        </li>
                        <li>
                            <i class="cv-icons cv-chat"></i>
                            <span>Chat</span>
                        </li>
                        <li>
                            <i class="cv-icons cv-envelope"></i>
                            <span>Mensagem</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="el-dialog__wrapper" id="dialogFab">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog">
                    <div class="el-dialog__header">
                        <span class="el-dialog__title"></span>
                        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                            <i class="el-dialog__close el-icon el-icon-close"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatCta
