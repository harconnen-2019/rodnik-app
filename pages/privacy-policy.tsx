import type { NextPage } from 'next';
import Head from 'next/head';
import { Sanatorium } from '@/lib/config';
import Title from '@/components/ui/title';

const Policy: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    {Sanatorium.orgName} Официальный сайт. Политика
                    конфиденциальности
                </title>
                <meta
                    name="description"
                    content={`Предлагаем Вам качественный курортный отдых в ${Sanatorium.orgFullName} по приемлемым ценам. Наш телефон: ${Sanatorium.orgPhone}`}
                />
            </Head>
            <Title>Политика конфиденциальности</Title>

            <p>
                Настоящая Политика конфиденциальности персональных данных (далее
                – Политика конфиденциальности) действует в отношении всей
                информации, которую Сайт может получить о Пользователе во время
                просмотра сайта.
            </p>
            <p className="mb-3 mt-5">
                <strong>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</strong>
            </p>
            <p className="mt-2">
                1.1 В настоящей Политике конфиденциальности используются
                следующие термины:
            </p>
            <p className="mt-2">
                1.1.1. «Администрация сайта» – уполномоченные сотрудники на
                управления сайтом, которые организуют и (или) осуществляет
                обработку персональных данных, а также определяет цели обработки
                персональных данных, состав персональных данных, подлежащих
                обработке, действия (операции), совершаемые с персональными
                данными.
            </p>
            <p className="mt-2">
                1.1.2. «Персональные данные» — любая информация, относящаяся к
                прямо или косвенно определенному или определяемому физическому
                лицу (субъекту персональных данных).
            </p>
            <p className="mt-2">
                1.1.3. «Обработка персональных данных» — любое действие
                (операция) или совокупность действий (операций), совершаемых с
                использованием средств автоматизации или без использования таких
                средств с персональными данными, включая сбор, запись,
                систематизацию, накопление, хранение, уточнение (обновление,
                изменение), извлечение, использование, передачу
                (распространение, предоставление, доступ), обезличивание,
                блокирование, удаление, уничтожение персональных данных.
            </p>
            <p className="mt-2">
                1.1.4. «Конфиденциальность персональных данных» — обязательное
                для соблюдения Оператором или иным получившим доступ к
                персональным данным лицом требование не допускать их
                распространения без согласия субъекта персональных данных или
                наличия иного законного основания.
            </p>
            <p className="mt-2">
                1.1.5. «Пользователь сайта» (далее - Пользователь) – лицо,
                имеющее доступ к Сайту, посредством сети Интернет и использующее
                Сайт.
            </p>
            <p className="mt-2">
                1.1.6. «Cookies» — небольшой фрагмент данных, отправленный
                веб-сервером и хранимый на компьютере пользователя, который
                веб-клиент или веб-браузер каждый раз пересылает веб-серверу в
                HTTP-запросе при попытке открыть страницу соответствующего
                сайта.
            </p>
            <p className="mt-2">
                1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной
                сети, построенной по протоколу IP.
            </p>
            <p className="mb-3 mt-5">
                <strong>2. ОБЩИЕ ПОЛОЖЕНИЯ</strong>
            </p>
            <p>
                2.1. Использование Пользователем Сайта означает согласие с
                настоящей Политикой конфиденциальности и условиями обработки
                персональных данных Пользователя.
            </p>
            <p className="mt-2">
                2.2. В случае несогласия с условиями Политики конфиденциальности
                Пользователь должен прекратить использование Сайта.
            </p>
            <p className="mt-2">
                2.3. Настоящая Политика конфиденциальности применяется только к
                данному сайту. Администрация сайта не контролирует и не несет
                ответственность за сайты третьих лиц, на которые Пользователь
                может перейти по ссылкам, доступным на Сайте.
            </p>
            <p className="mt-2">
                2.4. Администрация сайта не проверяет достоверность персональных
                данных, предоставляемых Пользователем Сайта.
            </p>
            <p className="mb-3 mt-5">
                <strong>3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</strong>
            </p>
            <p>
                3.1. Настоящая Политика конфиденциальности устанавливает
                обязательства Администрации сайта по неразглашению и обеспечению
                режима защиты конфиденциальности персональных данных, которые
                Пользователь предоставляет по запросу Администрации сайта при
                регистрации на Сайте или при оформлении заказа для приобретения
                Товара, оказания Услуг или выполнения Работ.
            </p>
            <p className="mt-2">
                3.2. Персональные данные, разрешённые к обработке в рамках
                настоящей Политики конфиденциальности, предоставляются
                Пользователем путём заполнения формы на Сайте и включают в себя
                следующую информацию:
            </p>
            <p className="mt-2">3.2.1. фамилию, имя, отчество Пользователя;</p>
            <p>3.2.2. контактный телефон Пользователя;</p>
            <p>3.2.3. адрес электронной почты (e-mail);</p>
            <p>
                3.2.4. адрес доставки Товара или место оказания услуг (если
                требуется);
            </p>
            <p>3.2.5. место жительство Пользователя.</p>
            <p className="mt-2">
                3.3. Сайт защищает Данные, которые автоматически передаются в
                процессе просмотра рекламных блоков и при посещении страниц, на
                которых установлен статистический скрипт системы («пиксель»):
            </p>
            <ul className="pl-5 list-disc mt-3 mb-3 italic">
                <li>IP адрес;</li>
                <li>информация из cookies;</li>
                <li>
                    информация о браузере (или иной программе, которая
                    осуществляет доступ к показу рекламы);
                </li>
                <li>время доступа;</li>
                <li>адрес страницы, на которой расположен рекламный блок;</li>
                <li>реферер (адрес предыдущей страницы).</li>
            </ul>
            <p>
                3.3.1. Отключение cookies может повлечь невозможность доступа к
                частям Сайта, требующим авторизации.
            </p>
            <p className="mt-2">
                3.3.2. Сайт осуществляет сбор статистики об IP-адресах своих
                посетителей. Данная информация используется с целью выявления и
                решения технических проблем, для контроля законности проводимых
                финансовых платежей.
            </p>
            <p className="mt-2">
                3.4. Любая иная персональная информация неоговоренная выше
                (история покупок, используемые браузеры и операционные системы и
                т.д.) подлежит надежному хранению и нераспространению, за
                исключением случаев, предусмотренных в п.п. 5.2. и 5.3.
                настоящей Политики конфиденциальности.
            </p>
            <p className="mb-3 mt-5">
                <strong>
                    4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ
                </strong>
            </p>
            <p>
                4.1. Персональные данные Пользователя Администрация сайта может
                использовать в целях:
            </p>
            <p className="mt-2">
                4.1.1. Идентификации Пользователя, зарегистрированного на Сайте,
                для оформления заказа и (или) заключения Договора купли-продажи
                товара либо оказания услуг дистанционным способом.
            </p>
            <p className="mt-2">
                4.1.2. Предоставления Пользователю доступа к персонализированным
                ресурсам Сайта.
            </p>
            <p className="mt-2">
                4.1.3. Установления с Пользователем обратной связи, включая
                направление уведомлений, запросов, касающихся использования
                Сайта, оказания услуг, обработка запросов и заявок от
                Пользователя.
            </p>
            <p className="mt-2">
                4.1.4. Определения места нахождения Пользователя для обеспечения
                безопасности, предотвращения мошенничества.
            </p>
            <p className="mt-2">
                4.1.5. Подтверждения достоверности и полноты персональных
                данных, предоставленных Пользователем.
            </p>
            <p className="mt-2">
                4.1.6. Создания учетной записи для совершения покупок либо
                заказа услуг, если Пользователь дал согласие на создание учетной
                записи.
            </p>
            <p className="mt-2">
                4.1.7. Уведомления Пользователя Сайта о состоянии Заказа.
            </p>
            <p className="mt-2">
                4.1.8. Обработки и получения платежей, подтверждения налога или
                налоговых льгот, оспаривания платежа, определения права на
                получение кредитной линии Пользователем.
            </p>
            <p className="mt-2">
                4.1.9. Предоставления Пользователю эффективной клиентской и
                технической поддержки при возникновении проблем связанных с
                использованием Сайта.
            </p>
            <p className="mt-2">
                4.1.10. Предоставления Пользователю с его согласия, обновлений
                продукции либо услуг, специальных предложений, информации о
                ценах, новостной рассылки и иных сведений от имени Сайта или от
                имени партнеров Сайта.
            </p>
            <p className="mt-2">
                4.1.11. Осуществления рекламной деятельности с согласия
                Пользователя.
            </p>
            <p className="mt-2">
                4.1.12. Предоставления доступа Пользователю на сайты или сервисы
                партнеров Сайта с целью получения продуктов, обновлений и услуг.
            </p>
            <p className="mb-3 mt-5">
                <strong>
                    5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
                </strong>
            </p>
            <p>
                5.1. Обработка персональных данных Пользователя осуществляется
                без ограничения срока, любым законным способом, в том числе в
                информационных системах персональных данных с использованием
                средств автоматизации или без использования таких средств.
            </p>
            <p className="mt-2">
                5.2. Пользователь соглашается с тем, что Администрация сайта
                вправе передавать персональные данные третьим лицам, в
                частности, курьерским службам, организациями почтовой связи,
                операторам электросвязи, исключительно в целях выполнения заказа
                Пользователя, оформленного на Сайте, включая доставку Товара,
                оказания Услуг или выполнения Работ.
            </p>
            <p className="mt-2">
                5.3. Персональные данные Пользователя могут быть переданы
                уполномоченным органам государственной власти Российской
                Федерации только по основаниям и в порядке, установленным
                законодательством Российской Федерации.
            </p>
            <p className="mt-2">
                5.4. При утрате или разглашении персональных данных
                Администрация сайта информирует Пользователя об утрате или
                разглашении персональных данных.
            </p>
            <p className="mt-2">
                5.5. Администрация сайта принимает необходимые организационные и
                технические меры для защиты персональной информации Пользователя
                от неправомерного или случайного доступа, уничтожения,
                изменения, блокирования, копирования, распространения, а также
                от иных неправомерных действий третьих лиц.
            </p>
            <p className="mt-2">
                5.6. Администрация сайта совместно с Пользователем принимает все
                необходимые меры по предотвращению убытков или иных
                отрицательных последствий, вызванных утратой или разглашением
                персональных данных Пользователя.
            </p>
            <p className="mb-3 mt-5">
                <strong>6. ОБЯЗАТЕЛЬСТВА СТОРОН</strong>
            </p>
            <p className="mt-2">
                <strong>6.1. Пользователь обязан:</strong>
            </p>
            <p>
                6.1.1. Предоставить информацию о персональных данных,
                необходимую для пользования Сайтом.
            </p>
            <p className="mt-2">
                6.1.2. Обновить, дополнить предоставленную информацию о
                персональных данных в случае изменения данной информации.
            </p>
            <p className="mt-2">
                <strong>6.2. Администрация сайта обязана:</strong>
            </p>
            <p>
                6.2.1. Использовать полученную информацию исключительно для
                целей, указанных в п. 4 настоящей Политики конфиденциальности.
            </p>
            <p className="mt-2">
                6.2.2. Обеспечить хранение конфиденциальной информации в тайне,
                не разглашать без предварительного письменного разрешения
                Пользователя, а также не осуществлять продажу, обмен,
                опубликование, либо разглашение иными возможными способами
                переданных персональных данных Пользователя, за исключением п.п.
                5.2. и 5.3. настоящей Политики Конфиденциальности.
            </p>
            <p className="mt-2">
                6.2.3. Принимать меры предосторожности для защиты
                конфиденциальности персональных данных Пользователя согласно
                порядку, обычно используемого для защиты такого рода информации
                в существующем деловом обороте.
            </p>
            <p className="mt-2">
                6.2.4. Осуществить блокирование персональных данных, относящихся
                к соответствующему Пользователю, с момента обращения или запроса
                Пользователя или его законного представителя либо
                уполномоченного органа по защите прав субъектов персональных
                данных на период проверки, в случае выявления недостоверных
                персональных данных или неправомерных действий.
            </p>
            <p className="mb-3 mt-5">
                <strong>7. ОТВЕТСТВЕННОСТЬ СТОРОН</strong>
            </p>
            <p>
                7.1. Администрация сайта, не исполнившая свои обязательства,
                несёт ответственность за убытки, понесённые Пользователем в
                связи с неправомерным использованием персональных данных, в
                соответствии с законодательством Российской Федерации, за
                исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2.
                настоящей Политики Конфиденциальности.
            </p>
            <p className="mt-2">
                7.2. В случае утраты или разглашения Конфиденциальной информации
                Администрация сайта не несёт ответственность, если данная
                конфиденциальная информация:
            </p>
            <p className="mt-2">
                7.2.1. Стала публичным достоянием до её утраты или разглашения.
            </p>
            <p className="mt-2">
                7.2.2. Была получена от третьей стороны до момента её получения
                Администрацией сайта.
            </p>
            <p className="mt-2">
                7.2.3. Была разглашена с согласия Пользователя.
            </p>
            <p className="mb-3 mt-5">
                <strong>8. РАЗРЕШЕНИЕ СПОРОВ</strong>
            </p>
            <p>
                8.1. До обращения в суд с иском по спорам, возникающим из
                отношений между Пользователем Сайта и Администрацией сайта,
                обязательным является предъявление претензии (письменного
                предложения о добровольном урегулировании спора).
            </p>
            <p className="mt-2">
                8.2. Получатель претензии в течение 30 календарных дней со дня
                получения претензии, письменно уведомляет заявителя претензии о
                результатах рассмотрения претензии.
            </p>
            <p className="mt-2">
                8.3. При не достижении соглашения спор будет передан на
                рассмотрение в судебный орган в соответствии с действующим
                законодательством Российской Федерации.
            </p>
            <p className="mt-2">
                8.4. К настоящей Политике конфиденциальности и отношениям между
                Пользователем и Администрацией сайта применяется действующее
                законодательство Российской Федерации.
            </p>
            <p className="mb-3 mt-5">
                <strong>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</strong>
            </p>
            <p>
                9.1. Администрация сайта вправе вносить изменения в настоящую
                Политику конфиденциальности без согласия Пользователя.
            </p>
            <p className="mt-2">
                9.2. Новая Политика конфиденциальности вступает в силу с момента
                ее размещения на Сайте, если иное не предусмотрено новой
                редакцией Политики конфиденциальности.
            </p>
        </>
    );
};

export default Policy;
