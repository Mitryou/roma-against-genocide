const locations = [
	{
		title: 'Барановичи, городская площадь',
		desc: '29 июня 1941 г. в Барановичах на городской площади (ныне стадион «Локоматив») расстреляны 90 ромов, пригнанных из района Ганцевичи – Мальковичи',
		coordinates: ['26.03197452729094', '53.13112440012875'],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Миоры',
		desc: 'В июле 1941 г. расстрелы рома и пленных красноармейцев были проведены жандармерией в местечке Миоры.',
		coordinates: [27.633784740085844, 55.62248381732897],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Минский район',
		desc: 'В сентябре 1941 г. в Минском районе расстреляны 23 рома «за многочисленные факты воровства».',
		coordinates: [27.633784740085844, 55.62248381732897],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Минск',
		desc: 'Евгений Алексеевич Хрол, независимый эксперт Международного общественного объединения «Фонд взаимопонимания и примирения»  документально подтвердил уничтожение 400 рома в концлагере в д. Дрозды.',
		coordinates: [27.535326389787375, 53.94031907686613],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Лепель',
		desc: 'Во второй половине сентября 1941 года полевая комендатура 181 (Лепель) передала айнзацкоманде 9 23 рома (13 мужчин и 10 женщин), которые якобы терроризировали сельское население и совершали кражи.',
		coordinates: [28.705414316428072, 54.87957467371375],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Могилев',
		desc: 'Сохранились сведения о двух расстрелах рома в Могилеве. 10 октября 1941 г. погибли 50, а в марте 1942 г. – 33 рома. В декабре 1941 г. во время карательной операции в окрестностях Могилева 127 ромов были расстреляны на месте.',
		coordinates: [30.33264068388382, 53.89807694113073],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Лида',
		desc: 'Осенью 1941 г. в Лиде погибли 86 ромов. часть из них умерли от голода во время недельного заключения, остальные были расстреляны по приказу начальника штаба гебитскомиссара Виндиша.',
		coordinates: [25.30276899815469, 53.89028823138297],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'д. Черешля (Новогрудский район)',
		desc: 'Как вспоминала жительница м. Любча Христина Шпаковская, «...осенью 1941 года был немецкий приказ о том, что все цыгане, проживающие на территории Любчанского района, должны явиться с лошадьми и упряжью. Всего съехалось мужчин и женщин человек 25. […] Из этих 25 человек были арестованы два цыгана, а остальные были освобождены. Со слов одного цыгана из этих двух мне известно, что их завели под деревню и заставили копать яму. А затем два полицейских […] убили одного цыгана, одного ранили в лицо. Он попросил углубить яму и, воспользовавшись этим, ударил лопатой одного полицейского, а сам убежал».',
		coordinates: [25.901404382412732, 53.80173339594255],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Бобруйск',
		desc: 'Борис Завицкий в детстве кочевал по Беларуси. Со слов знакомого рома Николая Малиновского он узнал о расстреле на берегу реки Бобруйка под Бобруйском. Оказалось, кочевые ромы укрывали советских офицеров. Военных переодели, но их форму не сожгли, потому что ткань была хорошего качества. Из-за этой одежды табор и погиб, причем расстреляны были все поголовно, вплоть до детей. Б. Завицкий видел братскую могилу на глинистом берегу и слышал подтверждение этой истории от местных жителей.',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Поставы',
		desc: 'В Кашицком лесу, расположенном в 4–5 км от г. Поставы «было расстреляно немцами 60 ромов, собранных со всего района».',
		coordinates: [26.839521450161524, 55.1136203829561],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Браслав',
		desc: 'Свидетель из г. Браслав Иосиф Гейтан показал, что ему неоднократно приходилось видеть, как мимо его дома проводили под конвоем арестованных на расстрел. Он хорошо запомнил, как «в 1942 году однажды немцы вели цыган человек 18 в конец гор. Браслав и расстреляли, за что не знаю».',
		coordinates: [27.031709501496888, 55.63947176058999],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Мстибово, Волковысский район',
		desc: 'В м. Мстибово Волковысского района в 1942 г. расстреляны 13 семейств ромов, которые там постоянно проживали.',
		coordinates: [24.258875144668433, 53.113057312981915],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Кашевичи (Петриковский район)',
		desc: '6 января 1943 г. в д. Кашевичи Копаткевичского района Полесской области немцы «схватили 19 человек цыган и, без никакой причины заперши их в сарай, сожгли живьем. Фамилии сожженных не установлены».',
		coordinates: [28.73414642352667, 52.48819481742534],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Полоцк',
		desc: 'Свидетель М.Я. Устинович рассказала об уничтожении ромов, которые находились в тюрьме г. Полоцк: «Ежедневно в 6 часов утра на моих глазах брали людей и увозили на расстрел. В начале февраля 1943 года на моих глазах в один день увезли на расстрел цыган 2 автомашины 5-ти тонные, набивши битком обе машины в количестве 100 человек одних стариков, женщин и детей, среди них было много грудных детей».',
		coordinates: [28.778154198519793, 55.484634405103634],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Горки',
		desc: 'В акте о немецко-фашистских зверствах в Дрибине и Дрибинском районе Могилевской области содержатся показания о том, что «весной 1943 года полиция арестовала 45 цыган (среди них были старики, женщины и дети). Цыган увезли в селение Горки и там расстреляли».',
		coordinates: [30.992676809438883, 54.285160099955476],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Борисов',
		desc: 'Осенью 1943 г. в районе Борисова были расстреляны 100 рома.',
		coordinates: [28.511913459491513, 54.224111392602325],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Железнодорожный район, Гомель',
		desc: 'В поименном списке жертв оккупантов по Железнодорожному району г. Гомеля упоминаются 17 ромов, убитых в 1943 г. ',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Полынковичи, Могилёвский район',
		desc: 'По сведениям очевидцев, в 1943 г. у д. Полыковичи в 6 км от Могилева расстреляна «группа цыган до 80 человек». При этом «отдельные цыгане при оказании сопротивления и нежелании подойти к могиле были заживо погребены».',
		coordinates: [30.37807234503232, 53.969998683005244],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Липиничи, Буда-Кошелевский район',
		desc: 'В д. Липиничи Буда-Кошелевского района в 1943 г. расстреляны «17 цыган, фамилии которых неизвестны».',
		coordinates: [30.546885611633776, 52.815510702344085],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Деревно, Воложинский район',
		desc: 'Согласно поименному списку расстрелянных, повешенных и замученных в д. Деревно Ивенецкого района было убито 8 ромов. ',
		coordinates: [27.59157009988927, 54.510193544929265],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Мосар, Глубокский район',
		desc: 'В Мосаре полиция, как сообщается, убивала ромов самостоятельно',
		coordinates: [27.46467169792099, 55.22646482276531],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Аг. Жодишки, Сморгонский район',
		desc: 'Житель м. Жодишки Сморгонского района (с 1942 г. входило в Генеральный округ «Литва») Людвиг Ракец в 1945 г. дал показания о том, что «во время нахождения немецкого гарнизона в Жодишках с июля 1941 г. по сентябрь 1943 г. под руководством коменданта гарнизона немца офицера Коркос Виталь была издевательски замучена и расстреляна группа цыган 25 человек, где было 9 человек детей, они лежали убитыми и не зарытыми несколько дней».',
		coordinates: [26.445926704111287, 54.62316603129254],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Мстиславль',
		desc: 'К сожалению, неизвестно, в каком году произошел расстрел 35 рома на западной окраине Мстиславля в овраге между Замковой и Троицкой горами. Первая экзекуция была проведена 15 октября 1941 г. Жертвами были евреи.',
		coordinates: [31.729381116117885, 54.025926076814564],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Чечерск',
		desc: 'Сохранились свидетельские показания о расстреле ромов вместе с евреями 28 декабря 1941 г. в Чечерске. Общее количество жертв – 432 человека.',
		coordinates: [30.917062470544927, 52.91918135114057],
		link: '/articles/fuck-the-strapicms'
	},

	{
		title: 'Глубокое',
		desc: 'Начиная с сентября 1941 года в урочище «Борок» Глубокского района оккупанты проводили систематические расстрелы ромского населения. По данным опроса ЧГК свидетеля А. Я. Смольского жандармы и полицейские систематически  проводили под конвоем к зданию жандармерии группы рома по 20—30 человек, после допроса которых обычно уводили в урочище Борок и там расстреливали, а их коней и имущество забирали себе. Количество убитых по данных ЧГК – около 1000.',
		coordinates: [27.66264085439948, 55.16615611890675],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Рогачёв',
		desc: 'В начале 1942 г. в Рогачеве «были замучены и расстреляны 300 советских граждан еврейской и цыганской национальности, собранные со всего района». По показаниям свидетельницы М.И. Даниловой: «расстрел был произведен 12 февраля 1942 года в количестве 300 человек. […] Было расстреляно 6 семей цыган. Расстреливались граждане всех возрастов, начиная от грудного ребенка до престарелых стариков. […] Расстрелял бывший начальник полиции Лобиков».',
		coordinates: [30.051527868422475, 53.074767523915376],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Могилев',
		desc: 'Cохранились сведения о двух расстрелах рома в Могилеве. 10 октября 1941 г. погибли 50, а в марте 1942 г. – 33 рома. В декабре 1941 г. во время карательной операции в окрестностях могилева и в самом городе были задержаны 1356 человек. Среди них – «кочевники, которые не имели документов». Количество последних составило 135 человек. Из них 127 ромов были расстреляны на месте.',
		coordinates: [30.33275487362788, 53.897806489860415],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Вилейка',
		desc: 'Х. Герлах  приводит сведения о уничтожения ромского и еврейского населения Вилейки в марте 1942 году с использованием той же братской могилы. ',
		coordinates: [26.91731622744328, 54.49561518329849],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Марьина Горка',
		desc: 'В Марьиной Горке в декабре 1941 г. несколько недель в невыносимых условиях находились интернированные рома и синти. в результате часть их погибла (в основном женщины и дети), а оставшиеся были расстреляны весной 1942 г.',
		coordinates: [28.144589127168615, 53.50977619250648],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Городище ',
		desc: 'В Городище цыгане ранее содержались в одном гетто с евреями; там расстреляли взрослых рома, убили детей». ',
		coordinates: [27.833773330444657, 53.98244160337791],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Узда ',
		desc: 'В акте Узденской районной комиссии об уничтожении населения немецкими оккупантами в районе содержатся сведения о том, что «в мае месяце 1942 г., дата точно не установлена, был произведен массовый расстрел цыган, общее количество расстрелянных не установлено, но только по двум бывшим волостям: Семеновичской и Стальбощинской было арестованот и расстреляно 538 цыган, в том числе детей, женщин и престарелых. Расстрел цыган производился севернее м. Узда в ста метрах, на бывшем еврейском кладбище. Арест цыган производился Узденской районной полицией и жандармерией». По сведениям В. Калинин в Узде существовал концентрационный лагерь для рома на 260 человек.',
		coordinates: [27.202586600917485, 53.4657307592431],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Витебск',
		desc: 'В апреле 1942 г. спецкоманда № 9 расстреляла группу из 20 рома под Витебском.',
		coordinates: [30.206899578578202, 55.192441278320224],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Мозырь',
		desc: 'В. Калинин приводит сведения об участии украинских карателей в уничтожении ромов на белорусских землях, входящих в Генеральный комиссариат «Украина». Так, в мае – июне 1942 г. ими были убиты под Мозырем несколько групп ромов. В декабре этого же года в лесах под Хойниками каратели выследили 12 семей. Людей привезли в город, заставили танцевать и играть на музыкальных инструментах. После этого на глазах у мирных жителей расстреляли.',
		coordinates: [29.218644967865686, 52.03685013764171],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Новогрудок',
		desc: 'В июне 1942 г. были собраны все рома по Новогрудскому округу и 7 числа были расстреляны за военными казармами по слонимскому шоссе в г. Новогрудке. «расстреливались целыми семьями не зависимо от пола и возраста.',
		coordinates: [25.82509607468029, 53.59890648164884],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Клецк, урочище Старина',
		desc: 'На процессе над начальником Барановицкого СД Максом Эстапаром немецкие свидетели сообщили, что при ликвидации гетто в Клецке были убиты евреи, работавшие на лесопилке, в результате чего предприятие осталось без рабочих. Тогда было решено привлечь к этому делу ромов. Они проработали всего три дня, после чего 60 человек были расстреляны. Могилой ромов была большая траншея, вырытая на окраине урочища Старина летом 1942 г.',
		coordinates: [26.60219182026606, 53.052334176630865],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Любча',
		desc: 'Разные сведения о количестве жертв и в местечке Любча. Если Х. Герлах называет цифру 40 и относит акцию к лету 1942 г., то согласно воспоминаниям жительницы местечка Любча Кристины Шпаковской, «...весной 1942 года стал массовый арест цыган. В том числе попал и мой муж. Арестовывали полицаи […]. Всего было цыган вместе с детьми больше 50 человек. […] На другой день ареста пришла полиция […], стали избивать мужчин, посадили в автомашину, взяли 2 детей и увезли за кладбище у м. Любча и всех расстреляли. Затем машина вернулась, взяли женщин с детьми и увезли на тоже кладбище и расстреляли».',
		coordinates: [26.056768974839308, 53.75146945838296],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Аг. Снов, Несвижский район',
		desc: '28 августа 1942 г. начальник жандармерии Несвижа в рапорте на имя окружного начальника жандармерии в Барановичах рассказывал об уничтожении «банды цыган» из восьми человек. Ее разоблачил полицейский патруль из м. Снов около д. Петуховщина. В «банду» входили мужчина, две женщины и пятеро детей в возрасте от двух месяцев до 12 лет. Со слов самих ромов, они были родом из Друи, а направлялись в Варшаву. Всех их привезли в Снов, где вечером расстреляли.',
		coordinates: [26.400334837379066, 53.2219496596625],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Ляховичи',
		desc: 'В августе 1942 г. была расстреляна семья ромов из шести человек под Ляховичами.',
		coordinates: [26.264672812872856, 53.03886411420666],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Ветка',
		desc: 'В сентябре 1942 г. по указанию Гомельского гестапо Ветковская комендатура и полиция собрали по всему району рома и оставшиеся семьи евреев, в количестве 61 человека. Все они были расстреляны в одном километре севернее города.',
		coordinates: [31.17286830789813, 52.565847707980744],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Г. п. Тереховка, Добрушский район',
		desc: 'В сентябре 1942 г.  в м. Тереховка были арестованы «60 человек ни в чем не повинных советских граждан цыганской и еврейской национальности только за то, что они цыгане и евреи. В числе арестованных было мужчин от 14 до 65 лет – 20, женщин от 16 до 50 лет – 16, детей в возрасте от 2 до 14 – 24». Через несколько дней всех арестованных отвели к заранее приготовленной яме, где и расстреляли.',
		coordinates: [31.423269682104785, 52.21688495696869],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Заостровечье, Клецкий район',
		desc: 'Согласно показаниям свидетелей, осенью 1942 г. под руководством карателя Ивана Наумчика полицейские расстреляли не менее 50 человек.',
		coordinates: [26.77882185745945, 52.89818549650939],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Михновский лес, д. Колдычево, Барановичский район',
		desc: 'В ноябре 1942 г. в Михновском лесу возле п. Колдычево был расстрелян табор, в котором находилось около 200 человек. В концлагере «Колдычево» уничтожали ромов со всего района. ',
		coordinates: [26.065161443134183, 53.28162445671489],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Д. Новосяды, Ошмянский район',
		desc: 'В ноябре 1942 г. около д. Новосяды Ошмянского района (Генеральный округ «Литва») по приказанию немецких властей расстреляны 44 человека, в числе которых 42 рома.',
		coordinates: [25.87209965659733, 54.40107259485821],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title: 'Г. п. Городище, Барановичский район',
		desc: 'В ноябре 1942 года около православного кладбища в м. Городище расстреляно от 40 до 100 ромов. ',
		coordinates: [30.638089478331764, 54.183101218723074],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title:
			'Зона проведения антипартизанской операции «Бреслау» 1-15.09.1942, Могилёвский, Быховский, Рогачёвский районы, (вдоль шоссе и железной дороги Могилев — Рогачев)',
		desc: 'В отчете шефа оперативной группы «B» за период с 1 по 15 сентября 1942 г. об уничтожении «банд» на территории тылового района группы армий «центр» содержатся сведения об истреблении 292 ромов наравне с бандитами, коммунистами, душевнобольными и уголовниками.',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title:
			'Зона проведения антипартизанской операции «Гамбург», в треугольнике Лида — Барановичи — Волковыск (междуречье рек Немана и Щары), декабрь 1942',
		desc: 'В оперативном приказе фюрера СС и полиции Генерального комиссариата «Беларусь» Курта фон Готтберга от 7.12.1942 г. относительно операции «Гамбург» читаем: «задача вверенных мне соединений состоит в том, чтобы напасть на бандитов и уничтожить их. Врагом считать каждого бандита, еврея, цыгана и всех подозреваемых в связи с бандами. если будут взяты пленные, то сначала доставить их для допроса в СД». В ходе операции задержаны 30 ромов с большим количеством припасов в районе Слонима.',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title:
			'Зона проведения антипартизанской операции «Альтона», Ивацевичский район, II пол. 12.1942',
		desc: 'В районе Косово-Бытень была проведена операция «Альтона». Как доносил начальник полиции безопасности и СД «было расстреляно 785 подозрительных лиц, 126 евреев и 24 цыгана».',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	},
	{
		title:
			'Зона проведения антипартизанской операции «Праздник урожая-1», 25-28.01.1943, Слуцкий район',
		desc: 'В оперативном приказе боевой группы Гриппа о задачах операции «Праздник урожая 1» отмечалось: «Бандитов нужно атаковать и уничтожить. За врага следует принимать бандита, еврея, цыгана и каждого заподозренного в бандитизме».',
		coordinates: [],
		link: '/articles/fuck-the-strapicms'
	}
];

export default locations;
