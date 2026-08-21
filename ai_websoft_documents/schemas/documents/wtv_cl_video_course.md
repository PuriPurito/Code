# Схема: wtv_cl_video_course.xmd

| Поле | Тип | Заголовок | Индекс | Связь |
| :--- | :--- | :--- | :--- | :--- |
| id | integer | ID |  |  |
| code | string | const=c_code | ✅ |  |
| name | string | const=c_name | ✅ |  |
| resource_id | integer | const=c_resource |  | resources |
| course_width | integer | ##'Ширина рабочей области'## |  |  |
| course_height | integer | ##'Высота рабочей области'## |  |  |
| max_bitrate | integer | ##'Max bitrate (kbps)'## |  |  |
| output_format | string | ##'Формат вывода'## |  |  |
| authors | string | const=vbbo_authors |  |  |
| person_id | integer |  |  | collaborators |
| last_compile_date | date | ##'Дата последней компиляции курса'## | ✅ |  |
| media_file_id | integer | ##'Результирующий медиа-файл'## |  | resources |
| lowres_media_file_id | integer | ##'Упрощенный результирующий медиа-файл'## |  | resources |
| temp_media_files | string | ##'Временный массив файлов'## |  |  |
| media_file_id | integer |  |  | resources |
| lowres_media_files | string | ##'Временный массив файлов'## |  |  |
| lowres_media_file_id | integer |  |  | resources |
| size | string |  |  |  |
| current_fragment | integer | ##'Фрагмент в работе'## |  |  |
| current_layer | integer | ##'Слой в работе'## |  |  |
| current_position | real | ##'Позиция (сек)'## |  |  |
| fragments | string | ##'Фрагменты'## |  |  |
| id | string | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| width | integer | ##'Ширина'## |  |  |
| height | integer | ##'Высота'## |  |  |
| poster_id | integer | ##'Картинка-заставка'## |  | resources |
| duration | real | ##'Продолжительность'## |  |  |
| start_time | real | ##'Время начала (сек)'## |  |  |
| transition_type | string | ##'Тип перехода к следующему фрагменту'## |  |  |
| layers | string | ##'Слои'## |  |  |
| id | string | ID |  |  |
| code | string | const=c_code |  |  |
| name | string | const=c_name |  |  |
| type_id | string | const=c_type |  | common.layer_types |
| start_second | real | ##'Начало (сек)'## |  |  |
| end_second | real | ##'Конец (сек)'## |  |  |
| duration | real | ##'Продолжительность'## |  |  |
| crop_start | real | ##'Обрезать сначала (сек)'## |  |  |
| crop_end | real | ##'Отрезать в конце (сек)'## |  |  |
| coordinate | string | ##'Координаты'## |  |  |
| top_left_x | real | ##'Верхний левый угол ( координата по X )'## |  |  |
| top_left_y | real | ##'Верхний левый угол ( координата по Y )'## |  |  |
| box_width | real | ##'Ширина'## |  |  |
| box_height | real | ##'Высота'## |  |  |
| video_screenshots | string | ##'Временный массив файлов'## |  |  |
| video_screenshot_id | integer |  |  | resources |
| time | real | ##'Время'## |  |  |
| time_str | string | ##'Время (строка)'## |  |  |
| sprite_id | integer | ##'Sprite для видео'## |  | resources |
| cells_count | integer | ##'Количество столбцов'## |  |  |
| rows_count | integer | ##'Количество строк'## |  |  |
| cell_width | real | ##'Ширина ячейки'## |  |  |
| cell_height | real | ##'Высота ячейки'## |  |  |
| step | real | ##'Шаг (сек)'## |  |  |
| original_width | real | ##'Исходная ширина'## |  |  |
| original_height | real | ##'Исходная высота'## |  |  |
| background_color | string | ##'Цвет фона'## |  |  |
| background_color_html | string | ##'Цвет фона HEX+Opacity'## |  |  |
| mute_audio | bool | ##'Включить аудио'## |  |  |
| resource_id | integer | const=c_resource |  | resources |
| resource_name | string | ##'Название ресурса'## |  |  |
| resource_draft_id | integer | ##'Рабочая копия'## |  | resources |
| layer_poster_id | integer | ##'Картинка-заставка'## |  | resources |
| angle_rotation | real | ##'Угол поворота'## |  |  |
| compression_ratio | real | ##'Коэффициент сжатия'## |  |  |
| border_color | string | ##'Цвет границы'## |  |  |
| border_color_html | string | ##'Цвет границы HEX+Opacity'## |  |  |
| border_width | integer | ##'Толщина границы'## |  |  |
| text_block | string | ##'Текстовый блок'## |  |  |
| text | string | ##'Текст'## |  |  |
| text_html | string | ##'Текст в обертке для конвертера'## |  |  |
| font | string | ##'Шрифт'## |  |  |
| font_size | integer | ##'Размер шрифта'## |  |  |
| align | string | ##'Выравнивание'## |  |  |
| valign | string | ##'Верт. выравнивание'## |  |  |
| color | string | ##'Цвет текста'## |  |  |
| color_html | string | ##'Цвет текста HEX+Opacity'## |  |  |
| padding | real | ##'Отбивка'## |  |  |
| doc_info | doc_info_base |  |  |  |
| comment | string | const=vkpb_comment |  |  |
