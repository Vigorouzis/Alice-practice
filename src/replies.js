exports.welcome = () => {
  return {
    text: 'Приветствую вас! Меня зовут Илья. Я робот Ильинской больницы. Сообщите свой пол и возраст.',
    tts: 'Приветствую вас! Меня зовут Илья. Я робот Ильинской больницы. Сообщите свой пол и возраст.',
    end_session: false
  };
};

exports.firstQuestion = () => {
  return {
    text: `У вас повышена температура тела?`,
    tts: `У вас повышена температура тела?`,
    end_session: false
  };
};

exports.secondQuestion = () => {
  return {
    text: ` Вы ощущаете боль?`,
    tts: ` Вы ощущаете боль?`,
    end_session: false
  };
};

exports.thirdQuestion = () => {
  return {
    text: `Оцените боль по шкале от одного до десяти. Где один - слабая боль, а десять - нестерпимая боль.`,
    tts: `Оцените боль по шкале от одного до десяти. Где один - слабая боль, а десять - нестерпимая боль.`,
    end_session: false
  };
};

exports.fourthQuestion = () => {
  return {
    text: `Вы связываете боль в животе с менструальным циклом?`,
    tts: `Вы связываете боль в животе с менструальным циклом?`,
    end_session: false
  };
};

exports.fifthDotOneQuestion = () => {
  return {
    text: `Боль в животе - один из самых частых симптомов заболевания, требующего неотложного хирургического вмешательства. Вам следует не теряя времени обратиться в отделение Экстренной помощи. В Ильинской больнице отделение Экстренной помощи работает круглосуточно. Не пытайтесь унять боль, принимая пищу. Не принимайте анальгетики и спазмолитики. Вы можете самостоятельно приехать в больницу?`,
    tts: `Боль в животе - один из самых частых симптомов заболевания, требующего неотложного хирургического вмешательства. Вам следует не теряя времени обратиться в отделение Экстренной помощи. В Ильинской больнице отделение Экстренной помощи работает круглосуточно. Не пытайтесь унять боль, принимая пищу. Не принимайте анальгетики и спазмолитики. Вы можете самостоятельно приехать в больницу?`,
    end_session: false
  };
};

exports.fifthDotTwoQuestion = () => {
  return {
    text: `Причинами болезненных менструаций могут быть нарушения нейрогуморальной регуляции, воспалительные процессы, эндометриоз, спаечная болезнь, опухоли матки и яичников. Вам необходимо обратиться к гинекологу для обследования и установления точного диагноза. Хотите записаться на прием к гинекологу?`,
    tts: `Причинами болезненных менструаций могут быть нарушения нейрогуморальной регуляции, воспалительные процессы, эндометриоз, спаечная болезнь, опухоли матки и яичников. Вам необходимо обратиться к гинекологу для обследования и установления точного диагноза. Хотите записаться на прием к гинекологу?`,
    end_session: false
  };
};


exports.sixDotOneQuestion = () => {
  return {
    text: `Специалисты отделения Экстренной помощи проведут необходимые обследования и установят точную причину боли.`,
    tts: `Специалисты отделения Экстренной помощи проведут необходимые обследования и установят точную причину боли.`,
    end_session: false
  };
};

exports.sixDotTwoQuestion = () => {
  return {
    text: `Боль в животе - один из самых частых симптомов заболевания, требующего неотложного хирургического вмешательства. Нельзя откладывать визит к врачу. Ближайшее доступное время записи: девять утра завтра. Перенаправляю вас на форму записи на прием`,
    tts: `Боль в животе - один из самых частых симптомов заболевания, требующего неотложного хирургического вмешательства. Нельзя откладывать визит к врачу. Ближайшее доступное время записи: девять утра завтра. Перенаправляю вас на форму записи на прием`,
    end_session: false
  };
};
