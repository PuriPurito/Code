## Анализ производительности запросов и сервисов с помощью Microsoft Application Insights

Поддержано с обновления 3 квартала 2018

             1.       Откройте https://portal.azure.com под учетной записью, которая имеет подписку Azure.

2.       Наберите в строке поиска ресурсов фразу «Application Insights»

3.       Выберите Application Insights

4.       Нажмите кнопку +Add(Добавить)

5.       Заполните следующие поля

6.       Введите наименование, например: company-webtutor-prime

7.       Выберите тип приложения: General

8.       Выберите подписку

9.       Укажите наименование новой группы ресурсов, например: company-webtutor-prime

10.   Укажите Location, например: West Europe

11.   Нажмите кнопку «Create»

12.   После некоторого времени, будет создан ресурс Application Insights, откройте его и скопируйте Instrumentation Key

13.   Откройте «Usage and Estimated Costs» и укажите план использования , для бесплатного укажите «Application Insights Basic» и на правой вкладке в разделе Data volume cap  откройте линк: «configure your daily data volume cap» и задайте «daily volume cap» 0.1 GB/day , и нажмите OK

14.   Откройте spxml\_unibridge\_config.xml и задайте следующие параметры , а также укажите Instrumentation Key , скопированный со страницы ресурса Application Insights:

    <add key="ApplicationInsights" value="true" /> <!-- Включение модуля Application Insights-->

    <add key="ApplicationInsightsInstrumentationKey" value="@instrumentation key" /> <!-- ключ Application Insights-->

    <add key="ApplicationInsightsDeveloperMode" value="false" /> <!-- Режим разработчика для более частой передачи данных (влияет на производительность)-->

    <add key="ApplicationInsightsTrackSysExceptions" value="false" />  <!-- Не отслеживать исключения для экономии траффика и объема -->

    <add key="ApplicationInsightsTrackXQuery" value="true" /> <!-- Отслеживать выполнение XQuery запросов -->

    <add key="ApplicationInsightsTrackObjects" value="true" /><!-- Отслеживать выполнение загрузки , записи и удаления документов-->

    <add key="ApplicationInsightsTrackBLOBS" value="true" /><!-- Отслеживать выполнение загрузки , записи и удаления ресурсов -->

15.   Откройте файл storage\\ApplicationInsights.config и найдите следующие разделы , для экономии траффика в них указывается фильтры и минимальное время выполнения в ms, если длительность запросов превышает заданный параметр, тогда осществляется передаче данных запроса в Application Insights, можно как уменьшить , так и увеличить в зависимости от потребностей, по-умолчанию, все что выполняется дольше секунды передается в аналитику.

<Add Type="wft.ai.extensions.DependenciesFilter, Websoft.ai\_extensions\_451">

               <IncludeTypes></IncludeTypes>

         <ExcludeTypes>SQL</ExcludeTypes>

         <MinValue>1000</MinValue>

</Add>

<Add Type="wft.ai.extensions.UrlFilter, Websoft.ai\_extensions\_451">

         <IncludeUrlMasks></IncludeUrlMasks>

         <ExcludeUrlMasks></ExcludeUrlMasks>

         <MinValue>1000</MinValue>

</Add>

<Add Type="wft.ai.extensions.MetricsFilter, Websoft.ai\_extensions\_451">

         <IncludeTypes></IncludeTypes>

         <ExcludeTypes></ExcludeTypes>

         <MinValue>1000</MinValue>

</Add>

16.   Включите WT и проверьте , что в логе spxml\_unibridge нет ошибок и модуль Application Insights инициализирован:

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Initializing...

06.12.2018 15:22:36 \[1\]  Inform:  ApplicationInsights.config path: ApplicationInsights.config

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Initializers Loading

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.Extensibility.OperationCorrelationTelemetryInitializer

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.DependencyCollector.HttpDependenciesParsingTelemetryInitializer

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.WindowsServer.AzureRoleEnvironmentTelemetryInitializer

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.WindowsServer.AzureWebAppRoleEnvironmentTelemetryInitializer

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.WindowsServer.BuildInfoConfigComponentVersionTelemetryInitializer

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Initializers Loaded.

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Processes Loading

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.Extensibility.PerfCounterCollector.QuickPulse.QuickPulseTelemetryProcessor

06.12.2018 15:22:36 \[1\]  Inform:  wft.ai.extensions.DependenciesFilter

06.12.2018 15:22:36 \[1\]  Inform:  wft.ai.extensions.UrlFilter

06.12.2018 15:22:36 \[1\]  Inform:  wft.ai.extensions.MetricsFilter

06.12.2018 15:22:36 \[1\]  Inform:  Microsoft.ApplicationInsights.Extensibility.Implementation.TransmissionProcessor

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Processes Loaded.

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Telemetry Channel: https://dc.services.visualstudio.com/v2/track

06.12.2018 15:22:36 \[1\]  Inform:  Application Insights Initialized.

06.12.2018 15:22:36 \[1\]  Inform:  Telemetry Extension Configuration applied.

17.   Откройте созданный ресурс Application Insights для просмотра производительности и аналитики.

---

