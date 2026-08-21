function main()
{

	// Получаем дату активации из законченного теста
	var dActivationDate = OptDate(learningDoc.start_usage_date);
	if (IsEmptyValue(dActivationDate)) {
		return;
	}

	// Записываем дату активации из законченного теста в незаконченный
	activeLearningDoc.start_usage_date = dActivationDate;
	activeLearningDoc.Doc.Save();
}

try {
	main();
}
catch (e) { }
