<style>
	:root {
		--avans-blue: rgba(16, 52, 158, 1);
		--avans-black: rgba(4, 24, 57, 1);
		--avans-black-disable: rgba(170, 176, 188, 1);
		--avans-gray: rgba(54, 70, 97, 1);
		--avans-input-bg: rgba(242, 243, 245, 1);
		--avans-radius-normal: 8px;
		--avans-radius-big: 12px;
		--avans-font-bold: 500 15px/22px Golos-Text, Arial, sans-serif;
		--avans-font-normal: 400 15px/22px Golos-Text, Arial, sans-serif;
		--avans-font-small: 400 13px/18px Golos-Text, Arial, sans-serif;
		--avans-error-color: rgba(168, 7, 39, 1);
	}

	.avans-container {
		max-width: 640px;
		margin: 0 auto;
	}

	.avans-hidden {
		display: none;
	}

	.avans-loading,
	.avans-denied {
		font: var(--avans-font-normal);
		color: var(--avans-gray);
		padding: 24px 0;
	}

	.avans-denied {
		color: var(--avans-error-color);
	}

	.avans-section-title {
		font: var(--avans-font-bold);
		color: var(--avans-black);
		margin: 0 0 12px;
	}

	.avans-expenses {
		width: 100%;
		border-collapse: collapse;
		margin: 0 0 24px;
	}

	.avans-expenses th,
	.avans-expenses td {
		font: var(--avans-font-small);
		text-align: left;
		padding: 8px 10px;
		border-bottom: 1px solid var(--avans-input-bg);
	}

	.avans-expenses th {
		color: var(--avans-gray);
		font-weight: 500;
	}

	.avans-expenses td {
		color: var(--avans-black);
	}

	.avans-expenses-empty {
		font: var(--avans-font-small);
		color: var(--avans-gray);
		margin: 0 0 24px;
	}

	.avans-toggle-field {
		background-color: var(--avans-input-bg);
		border: 1px solid var(--avans-input-bg);
		border-radius: var(--avans-radius-normal);
		padding: 9px 12px;
		margin: 0 0 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all 0.3s;
	}

	.avans-toggle-field:hover {
		background-color: #ffffff;
		border: 1px solid #e1e3e7;
	}

	.avans-toggle-field__label {
		font: var(--avans-font-small);
		color: var(--avans-gray);
	}

	.avans-field {
		background-color: var(--avans-input-bg);
		display: flex;
		flex-direction: column;
		padding: 9px 0 0 12px;
		border-radius: var(--avans-radius-normal);
		min-height: 56px;
		height: 56px;
		position: relative;
		box-sizing: border-box;
		border: 1px solid var(--avans-input-bg);
		margin: 0 0 12px;
		transition: all 0.3s;
		cursor: pointer;
	}

	.avans-field:hover {
		background-color: #ffffff;
		border: 1px solid #e1e3e7;
	}

	.avans-field.avans-open {
		background-color: #ffffff;
		border: 1px solid #1d4cc4;
	}

	.avans-field-disabled {
		cursor: not-allowed;
	}

	.avans-field-disabled .avans-input {
		color: var(--avans-black-disable);
		cursor: not-allowed;
	}

	.avans-field-disabled .avans-select-arrow {
		display: none;
	}

	.avans-input__name {
		font: var(--avans-font-small);
		color: var(--avans-gray);
		position: absolute;
		top: 9px;
		left: 12px;
		font-size: 12px;
		pointer-events: none;
		transition: all 0.3s;
		opacity: 0;
	}

	.avans-field.avans-has-value .avans-input__name {
		opacity: 1;
	}

	.avans-input {
		font: var(--avans-font-normal);
		color: var(--avans-gray);
		width: 100%;
		height: 38px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-right: 24px;
		transition: all 0.3s;
		cursor: pointer;
	}

	.avans-field.avans-has-value .avans-input {
		font: var(--avans-font-bold);
		color: var(--avans-black);
		align-items: flex-end;
		padding-bottom: 2px;
	}

	.avans-select-arrow {
		position: absolute;
		top: 50%;
		right: 12px;
		transform: translateY(-50%) rotate(90deg);
		transition: transform 0.2s ease;
		pointer-events: none;
	}

	.avans-field.avans-open .avans-select-arrow {
		transform: translateY(-50%) rotate(-90deg);
	}

	.avans-options-list {
		list-style: none;
		padding: 0;
		margin: -6px 0 12px;
		box-shadow: 0px 6px 16px 0px rgba(3, 17, 82, 0.05);
		border-radius: var(--avans-radius-big);
		border: 1px solid rgba(3, 17, 82, 0.05);
		overflow: hidden;
	}

	.avans-option-item {
		padding: 16px 16px;
		font: var(--avans-font-normal);
		color: var(--avans-black);
		border-bottom: 1px solid #ecedf0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.avans-option-item:last-child {
		border-bottom: none;
	}

	.avans-option-item:hover {
		background-color: #f2f3f5;
	}

	.avans-option-item_empty {
		color: var(--avans-gray);
		cursor: default;
	}

	.avans-option-item_empty:hover {
		background-color: transparent;
	}

	.avans-error-text {
		color: var(--avans-error-color);
		font: var(--avans-font-small);
		display: none;
		margin: -6px 0 12px;
	}

	.avans-error-text.avans-error-text_shown {
		display: block;
	}

	.avans-footer {
		margin: 24px 0 0;
		display: flex;
		gap: 12px;
		justify-content: flex-end;
	}

	.avans-save,
	.avans-submit {
		font: var(--avans-font-bold);
		border: none;
		padding: 14px 30px;
		border-radius: var(--avans-radius-normal);
		cursor: pointer;
		transition: opacity 0.3s;
	}

	.avans-save {
		background-color: var(--avans-input-bg);
		color: var(--avans-blue);
	}

	.avans-submit {
		background-color: #10349e;
		color: #fff;
	}

	.avans-save:hover,
	.avans-submit:hover {
		opacity: 0.7;
	}

	.avans-save:disabled,
	.avans-submit:disabled {
		background-color: var(--avans-input-bg);
		color: var(--avans-black-disable);
		cursor: not-allowed;
		opacity: 1;
	}

	.avans-pick-btn {
		font: var(--avans-font-bold);
		border: 1px solid var(--avans-blue);
		background-color: #fff;
		color: var(--avans-blue);
		padding: 9px 16px;
		border-radius: var(--avans-radius-normal);
		cursor: pointer;
		transition: opacity 0.3s;
	}

	.avans-pick-btn:hover {
		opacity: 0.7;
	}

	.avans-pick-btn:disabled {
		border-color: var(--avans-black-disable);
		color: var(--avans-black-disable);
		cursor: not-allowed;
		opacity: 1;
	}

	.avans-addressee-selected {
		background-color: var(--avans-input-bg);
		border-radius: var(--avans-radius-normal);
		padding: 9px 12px;
		margin: 0 0 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* .avans-addressee-selected само задаёт display: flex — без этого правила avans-hidden
	   (объявлен раньше по файлу, та же специфичность) проигрывает каскад, и пустой блок
	   с крестиком очистки виден всегда, даже когда адресат не выбран. */
	.avans-addressee-selected.avans-hidden {
		display: none;
	}

	.avans-addressee-name {
		font: var(--avans-font-normal);
		color: var(--avans-black);
	}

	.avans-addressee-clear {
		background: none;
		border: none;
		color: var(--avans-gray);
		font-size: 18px;
		line-height: 1;
		cursor: pointer;
		padding: 0 0 0 12px;
	}

	.avans-addressee-clear:hover {
		color: var(--avans-error-color);
	}

	.avans-addressee-clear:disabled {
		color: var(--avans-black-disable);
		cursor: not-allowed;
	}

	.avans-field-readonly {
		cursor: default;
	}

	.avans-field-readonly .avans-input {
		cursor: default;
	}

	.avans-modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(4, 24, 57, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.avans-modal-overlay.avans-hidden {
		display: none;
	}

	.avans-modal-content {
		background: #fff;
		padding: 20px;
		border-radius: var(--avans-radius-big);
		width: 90%;
		max-width: 520px;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.avans-modal-header {
		font: var(--avans-font-bold);
		color: var(--avans-black);
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 0 16px;
	}

	.avans-modal-close {
		background: none;
		border: none;
		font-size: 20px;
		line-height: 1;
		cursor: pointer;
		color: var(--avans-gray);
	}

	.avans-modal-search {
		font: var(--avans-font-normal);
		width: 100%;
		box-sizing: border-box;
		padding: 9px 12px;
		border-radius: var(--avans-radius-normal);
		border: 1px solid #e1e3e7;
		background-color: var(--avans-input-bg);
		margin: 0 0 12px;
	}

	.avans-modal-hint {
		font: var(--avans-font-small);
		color: var(--avans-gray);
		font-style: italic;
		padding: 12px 0;
		text-align: center;
	}

	.avans-modal-list {
		overflow-y: auto;
	}

	.avans-emp-row {
		padding: 10px 8px;
		border-bottom: 1px solid var(--avans-input-bg);
		cursor: pointer;
	}

	.avans-emp-row:last-child {
		border-bottom: none;
	}

	.avans-emp-row:hover {
		background-color: var(--avans-input-bg);
	}

	.avans-emp-row-main {
		font: var(--avans-font-normal);
		color: var(--avans-black);
	}

	.avans-emp-row-sub {
		font: var(--avans-font-small);
		color: var(--avans-gray);
	}
</style>

<div class="avans-container" id="avans-container">
	<div class="avans-loading" id="avans-loading">Загрузка данных заявления на аванс...</div>

	<form id="avans-form" class="avans-hidden" novalidate>
		<div class="avans-section-title">Расходы</div>
		<table class="avans-expenses avans-hidden" id="avans-expenses-table">
			<thead>
				<tr>
					<th>Категория расходов</th>
					<th>Кол-во дней</th>
					<th>Норма в сутки</th>
					<th>Сумма</th>
					<th>Сумма в рублях</th>
				</tr>
			</thead>
			<tbody id="avans-expenses-body"></tbody>
		</table>
		<div class="avans-expenses-empty avans-hidden" id="avans-expenses-empty">Расходы не заполнены</div>

		<div class="avans-section-title">Параметры аванса</div>

		<div class="avans-toggle-field">
			<label class="avans-toggle-field__label" for="avans-need-advance">Нужен аванс</label>
			<input type="checkbox" id="avans-need-advance" name="need_advance" />
		</div>

		<div class="avans-field" id="avans-payment-type-field">
			<div class="avans-input" id="avans-payment-type-input" tabindex="0"></div>
			<label class="avans-input__name">Вид места выплаты</label>
			<span class="avans-select-arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
					<path
						d="M1.16222 0.712609C1.70133 0.20833 1.96806 0.22838 1.96806 0.22838L8.73932 6.99964L1.96806 13.7712C1.96806 13.7712 1.70133 13.7913 1.16222 13.287C0.623108 12.7827 0.64813 12.4513 0.64813 12.4513L6.09962 6.99981L0.64813 1.54831C0.64813 1.54831 0.623107 1.21689 1.16222 0.712609Z"
						fill="#8C95A4"
					/>
				</svg>
			</span>
		</div>
		<div class="avans-hidden" id="avans-payment-type-options">
			<ul class="avans-options-list"></ul>
		</div>

		<div class="avans-field" id="avans-payment-value-field">
			<div class="avans-input" id="avans-payment-value-input" tabindex="0"></div>
			<label class="avans-input__name">Место выплаты</label>
			<span class="avans-select-arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
					<path
						d="M1.16222 0.712609C1.70133 0.20833 1.96806 0.22838 1.96806 0.22838L8.73932 6.99964L1.96806 13.7712C1.96806 13.7712 1.70133 13.7913 1.16222 13.287C0.623108 12.7827 0.64813 12.4513 0.64813 12.4513L6.09962 6.99981L0.64813 1.54831C0.64813 1.54831 0.623107 1.21689 1.16222 0.712609Z"
						fill="#8C95A4"
					/>
				</svg>
			</span>
		</div>
		<div class="avans-hidden" id="avans-payment-value-options">
			<ul class="avans-options-list"></ul>
		</div>
		<div class="avans-error-text" id="avans-payment-value-error"></div>

		<div class="avans-section-title">Адресат заявления</div>

		<div class="avans-addressee-selected avans-hidden" id="avans-addressee-selected">
			<span class="avans-addressee-name" id="avans-addressee-name"></span>
			<button type="button" class="avans-addressee-clear" id="avans-addressee-clear" title="Очистить">&times;</button>
		</div>
		<button type="button" class="avans-pick-btn" id="avans-addressee-pick-btn" style="margin: 0 0 12px">Выбрать адресата из каталога</button>

		<div class="avans-field avans-field-readonly avans-has-value" id="avans-addressee-position-field">
			<div class="avans-input" id="avans-addressee-position-input"></div>
			<label class="avans-input__name">Должность адресата</label>
		</div>

		<div class="avans-footer">
			<button type="button" class="avans-save" id="avans-save">Сохранить</button>
			<button type="button" class="avans-submit" id="avans-submit">Отправить</button>
		</div>
	</form>

	<div class="avans-denied avans-hidden" id="avans-denied"></div>
</div>

<div class="avans-modal-overlay avans-hidden" id="avans-addressee-modal">
	<div class="avans-modal-content">
		<div class="avans-modal-header">
			<span>Выбор адресата заявления</span>
			<button type="button" class="avans-modal-close" id="avans-addressee-modal-close">&times;</button>
		</div>
		<input type="text" class="avans-modal-search" id="avans-addressee-search" placeholder="Введите ФИО/ТН/Подразделение/Должность для поиска..." />
		<div class="avans-modal-hint" id="avans-addressee-hint">Введите минимум 2 символа для начала поиска</div>
		<div class="avans-modal-list" id="avans-addressee-list"></div>
	</div>
</div>

<script>
	(function () {
		var iBusinessTripID = "<%= OptInt(curObjectID) %>";

		var container = document.querySelector("#avans-container");
		var loadingEl = container.querySelector("#avans-loading");
		var formEl = container.querySelector("#avans-form");
		var deniedEl = container.querySelector("#avans-denied");

		var expensesTable = container.querySelector("#avans-expenses-table");
		var expensesBody = container.querySelector("#avans-expenses-body");
		var expensesEmpty = container.querySelector("#avans-expenses-empty");

		var needAdvanceInput = container.querySelector("#avans-need-advance");
		var paymentValueError = container.querySelector("#avans-payment-value-error");
		var saveBtn = container.querySelector("#avans-save");
		var submitBtn = container.querySelector("#avans-submit");

		var addresseeSelectedBlock = container.querySelector("#avans-addressee-selected");
		var addresseeNameEl = container.querySelector("#avans-addressee-name");
		var addresseeClearBtn = container.querySelector("#avans-addressee-clear");
		var addresseePickBtn = container.querySelector("#avans-addressee-pick-btn");
		var addresseePositionInput = container.querySelector("#avans-addressee-position-input");

		var addresseeModal = document.querySelector("#avans-addressee-modal");
		var addresseeModalClose = document.querySelector("#avans-addressee-modal-close");
		var addresseeSearchInput = document.querySelector("#avans-addressee-search");
		var addresseeHint = document.querySelector("#avans-addressee-hint");
		var addresseeListEl = document.querySelector("#avans-addressee-list");

		var LOCKED_TYPES = ["Касса", "Раздатчик"];
		var kassyList = [];
		var isSent = false;
		var isPaymentPlaceLocked = false;
		var originalPaymentPlaceText = "";
		var selectedAddressee = null;
		var addresseeSearchTimeout = null;

		var CHECK_SVG =
			'<svg class="avans-hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">' +
			'<path d="M1.96484 9.42188L5.87649 15.15L14.2387 0.448486C14.2387 0.448486 14.7222 0.504355 15.1545 0.761548C15.5868 1.01874 15.8541 1.39003 15.8541 1.39003L7.04688 16.8514L5.03516 17.2381L0.421875 10.4844C0.421875 10.4844 0.621094 10.1211 1.08203 9.79688C1.54297 9.47266 1.96484 9.42188 1.96484 9.42188Z" fill="#1D4CC4"></path>' +
			"</svg>";

		// Выпадающий список в стиле полей банковских реквизитов (avans-field / avans-input__name /
		// avans-select-arrow / avans-options-list / avans-option-item), без jQuery и без поиска —
		// у нас всегда небольшой фиксированный список значений. Классы намеренно с префиксом
		// avans-, а не как в странице банковских реквизитов (.field/.input/.option__item и т.п.) —
		// эти общие имена конфликтуют с глобальными стилями хост-страницы портала.
		function createSelectField(fieldEl, inputEl, optionsWrapperEl, listEl, sPlaceholder) {
			var options = [];
			var sValue = "";
			var isDisabled = false;
			var isOpen = false;

			inputEl.textContent = sPlaceholder || "";

			function close() {
				isOpen = false;
				optionsWrapperEl.classList.add("avans-hidden");
				fieldEl.classList.remove("avans-open");
			}

			function open() {
				if (isDisabled) return;
				isOpen = true;
				optionsWrapperEl.classList.remove("avans-hidden");
				fieldEl.classList.add("avans-open");
			}

			function toggle() {
				if (isOpen) close();
				else open();
			}

			function renderSelected() {
				var oSelected = options.filter(function (o) {
					return o.value === sValue;
				})[0];
				inputEl.textContent = oSelected ? oSelected.label : sPlaceholder || "";
				fieldEl.classList.toggle("avans-has-value", !!oSelected);
				Array.prototype.forEach.call(listEl.children, function (elItem, iIdx) {
					var elIcon = elItem.querySelector("svg");
					if (elIcon) elIcon.classList.toggle("avans-hidden", !(options[iIdx] && options[iIdx].value === sValue));
				});
			}

			function setValue(sNewValue, bSilent) {
				sValue = sNewValue;
				renderSelected();
				if (!bSilent && typeof controller.onChange === "function") controller.onChange(sValue);
			}

			function setOptions(aOptions, sSelectedValue) {
				options = aOptions || [];
				listEl.innerHTML = "";
				if (options.length === 0) {
					var elEmpty = document.createElement("li");
					elEmpty.className = "avans-option-item avans-option-item_empty";
					elEmpty.textContent = "Нет доступных вариантов";
					listEl.appendChild(elEmpty);
				}
				options.forEach(function (oOption) {
					var elItem = document.createElement("li");
					elItem.className = "avans-option-item";
					var elLabel = document.createElement("span");
					elLabel.textContent = oOption.label;
					elItem.appendChild(elLabel);
					elItem.insertAdjacentHTML("beforeend", CHECK_SVG);
					elItem.addEventListener("click", function (e) {
						e.stopPropagation();
						setValue(oOption.value);
						close();
					});
					listEl.appendChild(elItem);
				});
				setValue(sSelectedValue || "", true);
			}

			function setDisabled(bDisabled) {
				isDisabled = bDisabled;
				fieldEl.classList.toggle("avans-field-disabled", bDisabled);
				if (bDisabled) close();
			}

			inputEl.addEventListener("click", toggle);
			fieldEl.addEventListener("keydown", function (e) {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					toggle();
				} else if (e.key === "Escape") {
					close();
				}
			});
			document.addEventListener("click", function (e) {
				if (!fieldEl.contains(e.target) && !optionsWrapperEl.contains(e.target)) close();
			});

			var controller = {
				setOptions: setOptions,
				setValue: setValue,
				getValue: function () {
					return sValue;
				},
				setDisabled: setDisabled,
				close: close,
				onChange: null
			};
			return controller;
		}

		var paymentTypeField = createSelectField(
			container.querySelector("#avans-payment-type-field"),
			container.querySelector("#avans-payment-type-input"),
			container.querySelector("#avans-payment-type-options"),
			container.querySelector("#avans-payment-type-options .avans-options-list"),
			"Вид места выплаты"
		);

		var paymentValueField = createSelectField(
			container.querySelector("#avans-payment-value-field"),
			container.querySelector("#avans-payment-value-input"),
			container.querySelector("#avans-payment-value-options"),
			container.querySelector("#avans-payment-value-options .avans-options-list"),
			"Место выплаты"
		);

		// Выбор Адресата заявления - тот же принцип поиска/выбора сотрудника из каталога, что и на
		// странице заявки на обучение (afl_emp_search), но выбор одиночный: клик по строке сразу
		// выбирает сотрудника и закрывает модалку, без отдельной кнопки подтверждения.
		function openAddresseeModal() {
			if (isSent) return;
			addresseeSearchInput.value = "";
			addresseeListEl.innerHTML = "";
			addresseeHint.textContent = "Введите минимум 2 символа для начала поиска";
			addresseeHint.classList.remove("avans-hidden");
			addresseeModal.classList.remove("avans-hidden");
			addresseeSearchInput.focus();
		}

		function closeAddresseeModal() {
			addresseeModal.classList.add("avans-hidden");
		}

		function renderAddresseeField() {
			if (selectedAddressee) {
				addresseeNameEl.textContent = selectedAddressee.fullname;
				addresseeSelectedBlock.classList.remove("avans-hidden");
				addresseePickBtn.textContent = "Изменить адресата";
				addresseePositionInput.textContent = selectedAddressee.position || "—";
			} else {
				addresseeSelectedBlock.classList.add("avans-hidden");
				addresseePickBtn.textContent = "Выбрать адресата из каталога";
				addresseePositionInput.textContent = "";
			}
		}

		function selectAddressee(oEmp) {
			selectedAddressee = { id: oEmp.id, fullname: oEmp.fullname, position: oEmp.position };
			renderAddresseeField();
			closeAddresseeModal();
		}

		function renderAddresseeList(aEmployees) {
			addresseeListEl.innerHTML = "";
			aEmployees.forEach(function (emp) {
				var row = document.createElement("div");
				row.className = "avans-emp-row";

				var mainLine = document.createElement("div");
				mainLine.className = "avans-emp-row-main";
				mainLine.textContent = emp.fullname;

				var subLine = document.createElement("div");
				subLine.className = "avans-emp-row-sub";
				subLine.textContent = [emp.position, emp.subdivision].filter(Boolean).join(" · ");

				row.appendChild(mainLine);
				row.appendChild(subLine);
				row.addEventListener("click", function () {
					selectAddressee(emp);
				});
				addresseeListEl.appendChild(row);
			});
		}

		function searchAddresseeEmployees() {
			var query = addresseeSearchInput.value.trim();
			clearTimeout(addresseeSearchTimeout);

			if (query.length < 2) {
				addresseeListEl.innerHTML = "";
				addresseeHint.textContent = "Введите минимум 2 символа для начала поиска";
				addresseeHint.classList.remove("avans-hidden");
				return;
			}

			addresseeHint.textContent = "Поиск...";
			addresseeHint.classList.remove("avans-hidden");

			addresseeSearchTimeout = setTimeout(function () {
				fetch("/custom_web_template.html?object_code=afl_emp_search&emp_search_name=" + encodeURIComponent(query))
					.then(function (resp) {
						return resp.json();
					})
					.then(function (data) {
						if (!data || data.error) {
							addresseeHint.textContent = "Ошибка поиска сотрудников";
							addresseeHint.classList.remove("avans-hidden");
							return;
						}
						if (!data.length) {
							addresseeListEl.innerHTML = "";
							addresseeHint.textContent = "Не найдено активных сотрудников по вашему запросу";
							addresseeHint.classList.remove("avans-hidden");
							return;
						}
						addresseeHint.classList.add("avans-hidden");
						renderAddresseeList(data);
					})
					.catch(function () {
						addresseeHint.textContent = "Ошибка связи с сервером";
						addresseeHint.classList.remove("avans-hidden");
					});
			}, 400);
		}

		addresseePickBtn.addEventListener("click", openAddresseeModal);
		addresseeModalClose.addEventListener("click", closeAddresseeModal);
		addresseeModal.addEventListener("click", function (e) {
			if (e.target === addresseeModal) closeAddresseeModal();
		});
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape" && !addresseeModal.classList.contains("avans-hidden")) closeAddresseeModal();
		});
		addresseeSearchInput.addEventListener("input", searchAddresseeEmployees);
		addresseeClearBtn.addEventListener("click", function () {
			selectedAddressee = null;
			renderAddresseeField();
		});

		var ZajavlenieNaAvansApi = (function () {
			var OBJECT_CODE = "afl_business_trip_handler";
			var BASE_URL = "/custom_web_template.html";

			function buildUrl(params) {
				var q = new URLSearchParams();
				q.set("object_code", OBJECT_CODE);
				q.set("business_trip_id", iBusinessTripID);
				Object.keys(params || {}).forEach(function (key) {
					var value = params[key];
					if (value !== undefined && value !== null) q.set(key, value);
				});
				return BASE_URL + "?" + q.toString();
			}

			function request(params, method) {
				return fetch(buildUrl(params), { method: method || "GET" }).then(function (resp) {
					return resp
						.json()
						.catch(function () {
							throw new Error("Некорректный ответ сервера (не JSON)");
						})
						.then(function (body) {
							if (!body || body.success !== true) {
								throw new Error((body && body.message) || "Ошибка запроса (HTTP " + resp.status + ")");
							}
							return body;
						});
				});
			}

			return {
				getData: function () {
					return request({ action: "get_advance_data" }, "GET").then(function (body) {
						return body.data;
					});
				},
				saveDraft: function (params) {
					return request(Object.assign({ action: "save_advance_draft" }, params || {}), "POST").then(function (body) {
						return body.data;
					});
				},
				send: function (params) {
					return request(Object.assign({ action: "send_advance" }, params || {}), "POST").then(function (body) {
						return body.data;
					});
				}
			};
		})();

		function fmtNum(v) {
			if (v === undefined || v === null || v === "") return "";
			return Number(v).toLocaleString("ru-RU");
		}

		function fillExpensesTable(aExpenses) {
			expensesBody.innerHTML = "";
			if (!aExpenses || aExpenses.length === 0) {
				expensesTable.classList.add("avans-hidden");
				expensesEmpty.classList.remove("avans-hidden");
				return;
			}
			expensesEmpty.classList.add("avans-hidden");
			expensesTable.classList.remove("avans-hidden");

			aExpenses.forEach(function (oExpense) {
				var tr = document.createElement("tr");
				tr.innerHTML =
					"<td>" +
					(oExpense.category_name || "") +
					"</td>" +
					"<td>" +
					(oExpense.period_in_days != null ? oExpense.period_in_days : "") +
					"</td>" +
					"<td>" +
					(oExpense.daily_expenses != null ? oExpense.daily_expenses : "") +
					"</td>" +
					"<td>" +
					fmtNum(oExpense.sum) +
					(oExpense.currency_name ? " " + oExpense.currency_name : "") +
					"</td>" +
					"<td>" +
					fmtNum(oExpense.sum_rub) +
					"</td>";
				expensesBody.appendChild(tr);
			});
		}

		// Место выплаты никогда не вводится текстом: либо выбор кассы (Касса/Раздатчик),
		// либо только отображение значения из 1С (для остальных видов места выплаты и
		// когда всё поле целиком заблокировано).
		function updatePaymentValueField() {
			var sType = paymentTypeField.getValue();

			if (isPaymentPlaceLocked) {
				paymentValueField.setOptions([{ value: "_display", label: originalPaymentPlaceText }], "_display");
				paymentValueField.setDisabled(true);
				return;
			}

			if (LOCKED_TYPES.indexOf(sType) !== -1) {
				paymentValueField.setOptions(
					kassyList.map(function (oKassa) {
						return { value: String(oKassa.id), label: oKassa.name };
					}),
					""
				);
				paymentValueField.setDisabled(false);
			} else {
				paymentValueField.setOptions([{ value: "_display", label: originalPaymentPlaceText }], "_display");
				paymentValueField.setDisabled(true);
			}
		}

		function clearError() {
			paymentValueError.textContent = "";
			paymentValueError.classList.remove("avans-error-text_shown");
		}

		function showError(sMessage) {
			paymentValueError.textContent = sMessage;
			paymentValueError.classList.add("avans-error-text_shown");
		}

		// "Нужен аванс" можно менять при любом виде места выплаты — его блокирует только
		// уже состоявшаяся отправка (is_sent). Вид/Место выплаты дополнительно блокируются,
		// если пришли из 1С как Касса/Раздатчик (payment_place_locked).
		function applyState(oData) {
			isSent = !!oData.is_sent;
			isPaymentPlaceLocked = !!oData.payment_place_locked || isSent;

			paymentTypeField.setDisabled(isPaymentPlaceLocked);
			needAdvanceInput.disabled = isSent;
			addresseePickBtn.disabled = isSent;
			addresseeClearBtn.disabled = isSent;
			saveBtn.disabled = isSent;
			submitBtn.textContent = isSent ? "Отправлено" : "Отправить";
			submitBtn.disabled = isSent;
		}

		function loadData() {
			ZajavlenieNaAvansApi.getData()
				.then(function (data) {
					fillExpensesTable(data.expenses);

					needAdvanceInput.checked = !!data.need_advance;
					originalPaymentPlaceText = data.payment_place_text || "";

					paymentTypeField.setOptions(
						(data.payment_place_types || []).map(function (sType) {
							return { value: sType, label: sType };
						}),
						data.payment_place_type || ""
					);

					kassyList = data.kassy || [];

					selectedAddressee = data.addressee_id ? { id: data.addressee_id, fullname: data.addressee_fullname || "", position: data.addressee_position || "" } : null;
					renderAddresseeField();

					applyState(data);
					updatePaymentValueField();

					loadingEl.classList.add("avans-hidden");
					formEl.classList.remove("avans-hidden");
				})
				.catch(function (err) {
					loadingEl.classList.add("avans-hidden");
					deniedEl.textContent = err.message || "Не удалось загрузить заявление на аванс";
					deniedEl.classList.remove("avans-hidden");
				});
		}

		paymentTypeField.onChange = function () {
			clearError();
			updatePaymentValueField();
		};

		// Собирает параметры формы; возвращает null и показывает ошибку, если Касса
		// выбрана как вид места выплаты, но конкретная касса не выбрана.
		function collectFormParams() {
			var sType = paymentTypeField.getValue();
			var sValue;
			if (!isPaymentPlaceLocked && LOCKED_TYPES.indexOf(sType) !== -1) {
				sValue = paymentValueField.getValue();
				if (!sValue) {
					showError("Выберите кассу");
					return null;
				}
			}
			return {
				need_advance: needAdvanceInput.checked,
				payment_place_type: sType,
				payment_place_value: sValue,
				addressee_id: selectedAddressee ? selectedAddressee.id : ""
			};
		}

		saveBtn.addEventListener("click", function () {
			if (isSent) return;
			clearError();

			var oParams = collectFormParams();
			if (!oParams) return;

			saveBtn.setAttribute("disabled", true);
			submitBtn.setAttribute("disabled", true);
			var originalText = saveBtn.textContent;
			saveBtn.textContent = "Сохранение...";

			ZajavlenieNaAvansApi.saveDraft(oParams)
				.then(function () {
					if (window.Snacks) {
						window.Snacks.create({ type: "success", title: "Черновик заявления на аванс сохранён", timeout: 3000 });
					}
				})
				.catch(function (err) {
					if (window.Snacks) {
						window.Snacks.create({ type: "warning", title: "Не удалось сохранить: " + err.message, timeout: 5000 });
					}
				})
				.then(function () {
					saveBtn.removeAttribute("disabled");
					submitBtn.removeAttribute("disabled");
					saveBtn.textContent = originalText;
				});
		});

		submitBtn.addEventListener("click", function () {
			if (isSent) return;
			clearError();

			var oParams = collectFormParams();
			if (!oParams) return;

			saveBtn.setAttribute("disabled", true);
			submitBtn.setAttribute("disabled", true);
			var originalText = submitBtn.textContent;
			submitBtn.textContent = "Отправка...";

			ZajavlenieNaAvansApi.send(oParams)
				.then(function () {
					if (window.Snacks && window.Snacks.createWithReload) {
						window.Snacks.createWithReload({ type: "success", title: "Заявление на аванс отправлено", timeout: 5000 });
					} else {
						location.reload();
					}
				})
				.catch(function (err) {
					if (window.Snacks) {
						window.Snacks.create({ type: "warning", title: "Не удалось отправить: " + err.message, timeout: 5000 });
					}
					saveBtn.removeAttribute("disabled");
					submitBtn.removeAttribute("disabled");
					submitBtn.textContent = originalText;
				});
		});

		if (!iBusinessTripID) {
			loadingEl.classList.add("avans-hidden");
			deniedEl.textContent = "Не удалось определить командировку для этой страницы";
			deniedEl.classList.remove("avans-hidden");
		} else {
			loadData();
		}
	})();
</script>
