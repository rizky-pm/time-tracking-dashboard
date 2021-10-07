export const getData = (period, Dataset, selectedPeriodData) => {
    Dataset.forEach((data) => {
        switch (period) {
            case 'daily':
                selectedPeriodData.push({
                    title: data.title,
                    timeframes: data.timeframes.daily,
                    color: data.color,
                });
                break;
            case 'weekly':
                selectedPeriodData.push({
                    title: data.title,
                    timeframes: data.timeframes.weekly,
                    color: data.color,
                });
                break;
            case 'monthly':
                selectedPeriodData.push({
                    title: data.title,
                    timeframes: data.timeframes.monthly,
                    color: data.color,
                });
                break;
            default:
                break;
        }
    });
};
