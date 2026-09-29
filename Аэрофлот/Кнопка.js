<script>
	function getIdFromUrl() {
		const url = window.location.href.split('?')[0];
		return url.split('/').pop();
	}
	function NotificationIsRead() {
		var lastPart = "";
		lastPart = getIdFromUrl();
		var data = {
			"docid": lastPart,
		}
		var url = "custom_web_template.html?object_id=7644170900774132114";
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			success: function (response) {
				let result = JSON.parse(response);
				switch (result.status) {
					case 200:
						break;
					default:
						console.log(result.msg)
						window.close()
						break;
				}
			},
			error: function (response) {
				console.log(response)
			}
		});
	}
	NotificationIsRead();
</script>
<script>
	function getTaskIdFromUrl() {
		var url = window.location.href.split('?')[0];
		return url.split('/').pop();
	}
	function HideUniversalButton() {
		// Скрываем саму кнопку целиком (а не только текст) — тот же паттерн
		// поиска обёртки, что уже используется в HideButtonByText в проекте:
		// поднимаемся от [wt-role='text'] до контейнера кнопки/виджета.
		$("#WT_0x657BC751DBFBE72A [wt-role='text']")
			.closest('.wt-lp-wbutton-btn')
			.closest('[wt-role="btn"], .wt-lp-wbutton-workarea')
			.hide();
	}
	function SetUniversalButtonLabel() {
		var sTaskId = getTaskIdFromUrl();
		var data = {
			"task_id": sTaskId
		}
		var url = "custom_web_template.html?object_id=7669698369790527550";
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			success: function (response) {
				var result = (typeof response === "string") ? JSON.parse(response) : response;
				if (result.status == 200 && result.label != "") {
					$("#WT_0x657BC751DBFBE72A [wt-role='text']").text(result.label);
				}
				else {
					// пустой label (или ошибка) — уведомление не распознано
					// в свитче GetButtonLabelByNotification, кнопка для этой
					// задачи не используется, прячем её целиком
					HideUniversalButton();
				}
			},
			error: function (response) {
				console.log(response)
				HideUniversalButton();
			}
		});
	}
	if (window.WTLP && typeof WTLP.Subscribe === "function") {
		WTLP.Subscribe({
			sId: "0x657BC751DBFBE72A",
			sEvent: "ready",
			fn: function () {
				SetUniversalButtonLabel();
			}
		});
	} else {
		$(document).ready(function () {
			SetUniversalButtonLabel();
		});
	}
</script>