try {
  Entry.getMainWS();
} catch {
  window.Entry = document.querySelector(
    "iframe.css-1sbyuvq.eaizycc0"
  ).contentWindow.Entry;
  window.EntryStatic = document.querySelector(
    "iframe.css-1sbyuvq.eaizycc0"
  ).contentWindow.EntryStatic;
}
const LibraryCreator = {
  start: (blocksJSON, category, text) => {
    let blockArray = new Array();
    // LibraryCreator 가져오기
    Entry.staticBlocks = [
      {
        category: "start",
        blocks: [
          "when_run_button_click",
          "when_some_key_pressed",
          "mouse_clicked",
          "mouse_click_cancled",
          "when_object_click",
          "when_object_click_canceled",
          "when_message_cast",
          "message_cast",
          "message_cast_wait",
          "when_scene_start",
          "start_scene",
          "start_neighbor_scene",
          "check_object_property",
          "check_block_execution",
          "switch_scope",
          "is_answer_submited",
          "check_lecture_goal",
          "check_variable_by_name",
          "show_prompt",
          "check_goal_success",
          "positive_number",
          "negative_number",
          "wildcard_string",
          "wildcard_boolean",
          "register_score",
        ],
      },
      {
        category: "flow",
        blocks: [
          "wait_second",
          "repeat_basic",
          "repeat_inf",
          "repeat_while_true",
          "stop_repeat",
          "_if",
          "if_else",
          "wait_until_true",
          "stop_object",
          "restart_project",
          "when_clone_start",
          "create_clone",
          "delete_clone",
          "remove_all_clones",
        ],
      },
      {
        category: "moving",
        blocks: [
          "move_direction",
          "bounce_wall",
          "move_x",
          "move_y",
          "move_xy_time",
          "locate_x",
          "locate_y",
          "locate_xy",
          "locate_xy_time",
          "locate",
          "locate_object_time",
          "rotate_relative",
          "direction_relative",
          "rotate_by_time",
          "direction_relative_duration",
          "rotate_absolute",
          "direction_absolute",
          "see_angle_object",
          "move_to_angle",
        ],
      },
      {
        category: "looks",
        blocks: [
          "show",
          "hide",
          "dialog_time",
          "dialog",
          "remove_dialog",
          "change_to_some_shape",
          "change_to_next_shape",
          "add_effect_amount",
          "change_effect_amount",
          "erase_all_effects",
          "change_scale_size",
          "set_scale_size",
          "flip_x",
          "flip_y",
          "change_object_index",
        ],
      },
      {
        category: "brush",
        blocks: [
          "brush_stamp",
          "start_drawing",
          "stop_drawing",
          "set_color",
          "set_random_color",
          "change_thickness",
          "set_thickness",
          "change_brush_transparency",
          "set_brush_tranparency",
          "brush_erase_all",
        ],
      },
      {
        category: "text",
        blocks: [
          "text_read",
          "text_write",
          "text_append",
          "text_prepend",
          "text_flush",
        ],
      },
      {
        category: "sound",
        blocks: [
          "sound_something_with_block",
          "sound_something_second_with_block",
          "sound_from_to",
          "sound_something_wait_with_block",
          "sound_something_second_wait_with_block",
          "sound_from_to_and_wait",
          "sound_volume_change",
          "sound_volume_set",
          "sound_silent_all",
        ],
      },
      {
        category: "judgement",
        blocks: [
          "is_clicked",
          "is_press_some_key",
          "reach_something",
          "boolean_basic_operator",
          "boolean_and_or",
          "boolean_not",
        ],
      },
      {
        category: "calc",
        blocks: [
          "calc_basic",
          "calc_rand",
          "coordinate_mouse",
          "coordinate_object",
          "get_sound_volume",
          "quotient_and_mod",
          "calc_operation",
          "get_project_timer_value",
          "choose_project_timer_action",
          "set_visible_project_timer",
          "get_date",
          "distance_something",
          "get_sound_duration",
          "get_user_name",
          "length_of_string",
          "combine_something",
          "char_at",
          "substring",
          "index_of_string",
          "replace_string",
          "change_string_case",
        ],
      },
      {
        category: "variable",
        blocks: [
          "variableAddButton",
          "listAddButton",
          "ask_and_wait",
          "get_canvas_input_value",
          "set_visible_answer",
          "get_variable",
          "change_variable",
          "set_variable",
          "show_variable",
          "hide_variable",
          "value_of_index_from_list",
          "add_value_to_list",
          "remove_value_from_list",
          "insert_value_to_list",
          "change_value_list_index",
          "length_of_list",
          "is_included_in_list",
          "show_list",
          "hide_list",
        ],
      },
      {
        category: "func",
        blocks: ["functionAddButton"],
      },
      {
        category: "analysis",
        blocks: [
          "analizyDataAddButton",
          "append_row_to_table",
          "insert_row_to_table",
          "delete_row_from_table",
          "set_value_from_table",
          "get_table_count",
          "get_value_from_table",
          "calc_values_from_table",
          "open_table_chart",
          "close_table_chart",
        ],
      },
      {
        category: "ai_utilize",
        blocks: [
          "aiUtilizeBlockAddButton",
          "aiUtilizeModelTrainButton",
          "audio_title",
          "check_microphone",
          "speech_to_text_convert",
          "speech_to_text_get_value",
          "get_microphone_volume",
          "tts_title",
          "read_text",
          "read_text_wait_with_block",
          "set_tts_property",
          "translate_title",
          "get_translated_string",
          "check_language",
          "video_title",
          "video_draw_webcam",
          "video_check_webcam",
          "video_flip_camera",
          "video_set_camera_opacity_option",
          "video_motion_value",
          "video_toggle_model",
          "video_is_model_loaded",
          "video_number_detect",
          "video_toggle_ind",
          "video_body_part_coord",
          "video_face_part_coord",
          "video_detected_face_info",
        ],
      },
      {
        category: "expansion",
        blocks: [
          "expansionBlockAddButton",
          "weather_title",
          "check_weather",
          "check_finedust",
          "get_weather_data",
          "get_current_weather_data",
          "get_today_temperature",
          "check_city_weather",
          "check_city_finedust",
          "get_city_weather_data",
          "get_current_city_weather_data",
          "get_today_city_temperature",
          "festival_title",
          "count_festival",
          "get_festival_info",
          "behaviorConductDisaster_title",
          "count_disaster_behavior",
          "get_disaster_behavior",
          "behaviorConductLifeSafety_title",
          "count_lifeSafety_behavior",
          "get_lifeSafety_behavior",
        ],
      },
      {
        category: "arduino",
        blocks: [
          "arduino_reconnect",
          "arduino_open",
          "arduino_cloud_pc_open",
          "arduino_connect",
          "arduino_download_connector",
          "download_guide",
          "arduino_download_source",
          "arduino_noti",
        ].concat(EntryStatic.DynamicHardwareBlocks),
      },
    ];
    EntryStatic.getAllBlocks = () => {
      return Entry.staticBlocks;
    };
    function updateCategory(category, options) {
      Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
        { category: "start", visible: true },
        { category: "flow", visible: true },
        { category: "moving", visible: true },
        { category: "looks", visible: true },
        { category: "brush", visible: true },
        { category: "text", visible: true },
        { category: "sound", visible: true },
        { category: "judgement", visible: true },
        { category: "calc", visible: true },
        { category: "variable", visible: true },
        { category: "func", visible: true },
        { category: "analysis", visible: true },
        { category: "ai_utilize", visible: true },
        { category: "expansion", visible: true },
        { category: category, visible: true },
        { category: "arduino", visible: true },
      ]);
      for (let i = 0; i < $(".entryCategoryElementWorkspace").length; i++) {
        if (
          !(
            $($(".entryCategoryElementWorkspace")[i]).attr("id") ==
            "entryCategorytext"
          )
        ) {
          $($(".entryCategoryElementWorkspace")[i]).attr(
            "class",
            "entryCategoryElementWorkspace"
          );
        }
      }
      Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
      Entry.playground.blockMenu._generateCategoryCode(category);
      if (options) {
        if (options.background) {
          $(`#entryCategory${category}`).css(
            "background-image",
            "url(" + options.background + ")"
          );
          $(`#entryCategory${category}`).css("background-repeat", "no-repeat");
          if (options.backgroundSize) {
            $(`#entryCategory${category}`).css(
              "background-size",
              options.backgroundSize + "px"
            );
          }
        }
        if (options.name) {
          $(`#entryCategory${category}`)[0].innerText = options.name;
        }
      }
    }
    function addBlock(
      blockname,
      template,
      color,
      params,
      _class,
      func,
      skeleton = "basic"
    ) {
      Entry.block[blockname] = {
        color: color.color,
        fontColor: color.font,
        outerLine: color.outline,
        skeleton: skeleton,
        statement: [],
        params: params.params,
        events: {},
        def: {
          params: params.define,
          type: blockname,
        },
        paramsKeyMap: params.map,
        class: _class ? _class : "default",
        func: func,
        template: template,
      };
    }
    // 블록 추가하기
    for (let i in blocksJSON) {
      let block = blocksJSON[i];
      blockArray.push(block.name);
      addBlock(
        block.name,
        block.template,
        { color: block.color.default, outerLine: block.color.darken },
        { params: block.params, define: block.def, map: block.map },
        block.class,
        block.func,
        block.skeleton
      );
    }
    // 블록 반영
    Entry.staticBlocks.push({ category: category, blocks: blockArray });
    // 카테고리 업데이트 (ws에서만)
    if (Entry.getMainWS()) {
      updateCategory(category);
      // 아이콘 적용
      $("head").append(
        `<style>#entryCategory${category}{background-image:url(https://raw.githack.com/entry62045/entryjs/main/images/icon.svg);background-repeat:no-repeat;margin-bottom:1px;background-position-y: 10px;background-size: 20px;}.entrySelectedCategory#entryCategory${category}{background-image:url(https://raw.githack.com/entry62045/entryjs/main/images/icon_selected.svg);background-color:#FA6F23;border-color:##FA6F23;color:#fff}</style>`
      );
      // 카테고리 이름 적용;
      $(`#entryCategory${category}`).append(text);
    }
  },
};
// 클립보드 복사 함수
function copy(val) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = val;
  dummy.select();
  try {
    document.execCommand("copy");
  } catch {
    alert("복사하기를 지원하지 않습니다.");
  } finally {
    document.body.removeChild(dummy);
  }
}
const blocks = [
  {
    name: "ExpressBlock_Webblocks",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Web",
        color: EntryStatic.colorSet.common.TEXT,
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
  {
    name: "ExpressBlock_OpenUrl",
    template: "%1 사이트 열기(일반)%2",
    skeleton: "basic",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["https://playentry.org"],
      },
      null,
    ],
    map: {
      WEBSITE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      open(script.getValue("WEBSITE", script));
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_OpenUrlSafeMode",
    template: "%1 사이트 열기(안전모드)%2",
    skeleton: "basic",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["https://playentry.org"],
      },
      null,
    ],
    map: {
      WEBSITESAFEMODE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      open(script.getValue("WEBSITESAFEMODE", script));
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_SetPageTitle",
    template: "페이지 제목을 %1로 바꾸기%2",
    skeleton: "basic",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["엔트리"],
      },
      null,
    ],
    map: {
      PAGETITLE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      document.title = script.getValue("PAGETITLE", script);
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_GetPageTitle",
    template: "페이지 제목",
    skeleton: "basic_string_field",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      let pagetitle = document.title;
      return pagetitle;
    },
  },
  {
    name: "ExpressBlock_OpenUserPage",
    template: "%1 유저의 마이페이지 열기%2",
    skeleton: "basic",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["entry62045"],
      },
      null,
    ],
    map: {
      USERNAME: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      open("https://playentry.org/" + script.getValue("USERNAME", script));
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_Getminute2",
    template: "현재 2자리 시간",
    skeleton: "basic_string_field",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      let today1 = new Date();
      let hours = today1.getHours;
      if (hours < 10) {
        hours = "0" + hours;
      }
      return hours;
    },
  },
  {
    name: "ExpressBlock_Getminute2",
    template: "현재 2자리 분",
    skeleton: "basic_string_field",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      let today1 = new Date();
      let minutes = today1.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes;
    },
  },
  {
    name: "ExpressBlock_Getsecond2",
    template: "현재 2자리 초",
    skeleton: "basic_string_field",
    color: {
      default: "#15b01a",
      darken: "#15b01a",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      let today2 = new Date();
      let seconds = today2.getSeconds();
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return seconds;
    },
  },
  {
    name: "ExpressBlock_JsonBlocks",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Json",
        color: EntryStatic.colorSet.common.TEXT,
        class: "bold",
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
  {
    name: "ExpressBlock_Get",
    template: "%1 가져오기 (GET)",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: ["https://playentry.org/api/discuss/findNotice"],
      },
    ],
    map: {
      APIURL: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      let res = await fetch(script.getValue("APIURL", script));
      let data = await res.json();
      return data;
    },
  },
  {
    name: "ExpressBlock_GetString",
    template: "%1 가져오기 (GET) & string 형식 변환",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: ["https://playentry.org/api/discuss/findNotice"],
      },
    ],
    map: {
      APIURLTOSTRING: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      let Stringres = await fetch(script.getValue("APIURLTOSTRING", script));
      let StringData = await Stringres.json();
      let StringDataToString = JSON.stringify(StringData);
      return StringDataToString;
    },
  },
  {
    name: "ExpressBlock_JsonKey",
    template: "JSON %1 의 %2 항목",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: [`{ "title": "Hello, world!" }`],
      },
      {
        type: "text",
        params: ["title"],
      },
    ],
    map: {
      JSON: 0,
      KEY: 1,
    },
    class: "text",
    func: async (sprite, script) => {
      let json = eval(script.getValue("JSON", script));
      let done = json[script.getValue("KEY", script)];
      return done;
    },
  },
  {
    name: "ExpressBlock_StringToJSON",
    template: "%1 내용을 JSON으로 변환",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: [`{ "title": "Hello, world!" }`],
      },
    ],
    map: {
      STRINGTOJSON: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      let StringToJSON = JSON.parse(script.getValue("STRINGTOJSON", script));
      return StringToJSON;
    },
  },
  {
    name: "ExpressBlock_Post",
    template: "%1에 %2 POST 요청 보내기%3",
    skeleton: "basic",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["https://playentry.org/api/discuss"],
      },
      {
        type: "text",
        params: [
          '{ "images": [], "category": "free", "title": "제목", "content": "내용", "groupNotice": false }',
        ],
      },
      null,
    ],
    map: {
      APIURL: 0,
      DATA: 1,
    },
    class: "text",
    func: async (sprite, script) => {
      let res = await fetch(script.getValue("APIURL", script), {
        method: "POST",
        body: script.getValue("DATA", script),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_EntryLogin",
    template: "엔트리 계정 로그인하기 아이디 %1 비밀번호 %2 %3",
    skeleton: "basic",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["ID"],
      },
      {
        type: "text",
        params: ["PW"],
      },
      null,
    ],
    map: {
      USERNAME: 0,
      PASSWORD: 1,
    },
    class: "text",
    func: async (sprite, script) => {
      var username = script.getValue("USERNAME", script);
      var password = script.getValue("PASSWORD", script);
      var remember = false;
      await fetch("https://playentry.org/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `mutation(
					$username: String!
					$password: String!
					$rememberme: Boolean
					$captchaValue: String
					$captchaKey: String
					$captchaType: String
				) {
					signinByUsername(
					username: $username
					password: $password
					rememberme: $rememberme
					captchaValue: $captchaValue
					captchaKey: $captchaKey
					captchaType: $captchaType
				) {
					id
					username
					nickname
					role
					isEmailAuth
					isSnsAuth
					isPhoneAuth
					studentTerm
					status {
						userStatus
					}
					profileImage {
						id
						name
						label {
							ko
							en
							ja
							vn
						}
						filename
						imageType
						dimension {
							width
							height
						}
						trimmed {
							filename
							width
							height
						}
					}
					banned {
						username
						nickname
						reason
						bannedCount
						bannedType
						projectId
						startDate
						userReflect {
							status
							endDate
						}
					}
					}
				}
				`,
          variables: { username, password, rememberme: remember },
        }),
      });
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_UsernameToID",
    template: "%1 유저네임의 ID",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: ["entry62045"],
      },
    ],
    map: {
      USERNAMETOID: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      var username = script.getValue("USERNAMETOID", script);
      var id = (
        await (
          await fetch("https://playentry.org/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `
						query ($username: String) {
							user(username: $username) {
								id
							}
						}
					`,
              variables: { username: username },
            }),
          })
        ).json()
      ).data.user.id;
      return id;
    },
  },
  {
    name: "ExpressBlock_NicknameToID",
    template: "%1 닉네임의 ID",
    skeleton: "basic_string_field",
    color: {
      default: "#383838",
      darken: "#383838",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: ["62045"],
      },
    ],
    map: {
      NICKNAMETOID: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      var nickname = script.getValue("NICKNAMETOID", script);
      var id = (
        await (
          await fetch("https://playentry.org/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `
						query ($nickname: String) {
							user(nickname: $nickname) {
								id
							}
						}
					`,
              variables: { nickname: nickname },
            }),
          })
        ).json()
      ).data.user.id;
      return id;
    },
  },
  {
    name: "ExpressBlock_SearchBlocks",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Search",
        color: EntryStatic.colorSet.common.TEXT,
        class: "bold",
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
  {
    name: "ExpressBlock_SearchGoogle",
    template: "%1 내용을 구글에 검색하기%2",
    skeleton: "basic",
    color: {
      default: "#33aa5f",
      darken: "#33aa5f",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["엔트리"],
      },
      null,
    ],
    map: {
      SEARCHRESULT: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      open(
        "https://google.com/search?q=" + script.getValue("SEARCHRESULT", script)
      );
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_Console",
    template: "%1 내용을 브라우저 콘솔에 %2 하기%3",
    skeleton: "basic",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Dropdown",
        options: [
          ["로그", "log"],
          ["경고", "warn"],
          ["오류", "error"],
          ["알림", "info"],
        ],
        fontSize: 11,
        arrowColor: "#f78640",
        value: "log",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: [`엔트리`],
      },
      null,
      null,
    ],
    map: {
      CONTENT: 0,
      TYPE: 1,
    },
    class: "text",
    func: async (sprite, script) => {
      console[script.getValue("TYPE", script)](
        script.getValue("CONTENT", script)
      );
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_ConsoleClear",
    template: "브라우저 콘솔 모두 지우기%1",
    skeleton: "basic",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [null],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      console.clear();
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_StartJS",
    template: "%1 코드를 실행하기%2",
    skeleton: "basic",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: [`console.log('콘솔 출력');`],
      },
      null,
    ],
    map: {
      STARTJSCODE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      try {
        eval(script.getValue("STARTJSCODE", script));
      } catch (err) {
        alert("다음 오류가 발생하여 실행에 실패하였습니다. 내용: " + err);
      }
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_JSalert",
    template: "%1 내용의 alert 창 띄우기%2",
    skeleton: "basic",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: [`Javascript alert() 함수입니다.`],
      },
      null,
    ],
    map: {
      MESSAGEVALUE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      alert(script.getValue("MESSAGEVALUE", script));
    },
  },
  {
    name: "ExpressBlock_JSprompt",
    template: "%1 내용의 prompt 창 띄우기",
    skeleton: "basic_string_field",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: [`내용을 입력하세요.`],
      },
    ],
    map: {
      PROMPTVALUE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      let promptvalue = prompt(script.getValue("PROMPTVALUE", script));
      return promptvalue;
    },
  },
  {
    name: "ExpressBlock_JSconfirm",
    template: "%1 내용의 confirm 창에서 확인을 눌렀는가?",
    skeleton: "basic_string_field",
    color: {
      default: "#d15000",
      darken: "#d15000",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: [`확인과 취소 중에서 선택하세요.`],
      },
    ],
    map: {
      CONFIRMVALUE: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      let confirmvalue = confirm(script.getValue("CONFIRMVALUE", script));
      return confirmvalue;
    },
  },
  {
    name: "ExpressBlock_BoostModeBlocks",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Boost Mode",
        color: EntryStatic.colorSet.common.TEXT,
        class: "bold",
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
  {
    name: "ExpressBlock_BoostMode",
    template: "부스트 모드가 켜져 있는가?",
    skeleton: "basic_boolean_field",
    color: {
      default: "#850bb5",
      darken: "#850bb5",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      typeof useWebGL == "undefined" ? false : useWebGL == true ? true : false;
    },
  },
  {
    name: "ExpressBlock_EventBlocks",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Event",
        color: EntryStatic.colorSet.common.TEXT,
        class: "bold",
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
  {
    name: "ExpressBlock_DELETEEntryListArray",
    template: "엔트리 리스트 %1의 모든 항목 삭제하기%2",
    skeleton: "basic",
    color: {
      default: "#1dbfa1",
      darken: "#1dbfa1",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: [`리스트`],
      },
      null,
    ],
    map: {
      ENTRYDELETELISTNAME: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      const DeleteList = Entry.variableContainer.getListByName(
        script.getValue("ENTRYDELETELISTNAME")
      );
      while (DeleteList.getArray().length > 0) {
        DeleteList.deleteValue(1);
      }
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_FindEntryListArray",
    template: "엔트리 리스트 %1에 %2가 포함되어 있을 때 그 위치",
    skeleton: "basic_string_field",
    color: {
      default: "#1dbfa1",
      darken: "#1dbfa1",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Block",
        accept: "string",
      },
    ],
    def: [
      {
        type: "text",
        params: [`리스트`],
      },
      {
        type: "text",
        params: ["엔트리"],
      },
    ],
    map: {
      ENTRYFINDLISTNAME: 0,
      ENTRYFINDLISTSTRING: 1,
    },
    class: "text",
    func: async (sprite, script) => {
      let list = Entry.variableContainer.getListByName(
        script.getValue("ENTRYFINDLISTNAME", script)
      );
      if (!list) {
        return null;
      }
      const arr = list.getArray();
      const data = script.getValue("ENTRYFINDLISTSTRING", script);
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i].data.toString() == data.toString()) {
          return i + 1;
        }
      }
      return null;
    },
  },
  {
    name: "ExpressBlock_BlockFindChange",
    template: "블럭 감지 활성화(비공식로딩 변수 값을 1로 변경)%1",
    skeleton: "basic",
    color: {
      default: "#1dbfa1",
      darken: "#1dbfa1",
    },
    params: [
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [null],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      Entry.variableContainer.getVariableByName("비공식로딩").value_ = 1;
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_CopytoClipboard",
    template: "%1 내용을 클립보드에 복사하기%2",
    skeleton: "basic",
    color: {
      default: "#00b6b1",
      darken: "#00b6b1",
    },
    params: [
      {
        type: "Block",
        accept: "string",
      },
      {
        type: "Indicator",
        img: "block_icon/start_icon_play.svg",
        size: 11,
      },
    ],
    def: [
      {
        type: "text",
        params: ["엔트리"],
      },
      null,
    ],
    map: {
      TEXTTOCOPY: 0,
    },
    class: "text",
    func: async (sprite, script) => {
      copy(script.getValue("TEXTTOCOPY", script));
      return script.callReturn();
    },
  },
  {
    name: "ExpressBlock_GetBrowser",
    template: "브라우저 이름",
    skeleton: "basic_string_field",
    color: {
      default: "#00b6b1",
      darken: "#00b6b1",
    },
    params: [],
    def: [],
    map: {},
    class: "text",
    func: async (sprite, script) => {
      return Entry.userAgent;
    },
  },
  {
    name: "ExpressBlock_Copy",
    template: "%1",
    skeleton: "basic_text",
    color: {
      default: EntryStatic.colorSet.common.TRANSPARENT,
      darken: EntryStatic.colorSet.common.TRANSPARENT,
    },
    params: [
      {
        type: "Text",
        text: "Made by 62045, using EntBlocks, Remake by P0ng",
        color: EntryStatic.colorSet.common.TEXT,
        class: "bold",
        align: "center",
      },
    ],
    def: [],
    map: {},
    class: "text",
  },
];
// 블럭 불러오기
LibraryCreator.start(blocks, "API", "특급");
// 리뉴얼 이전 장면 1 로드 함수
async function ExpressBlockLoad() {
  if (Entry.getMainWS() && Entry.projectId) {
    const TempProjectId = Entry.projectId;
    const ExportedProject = Entry.exportProject();
    const ProjectData = await (
      await fetch(`https://playentry.org/api/project/${Entry.projectId}`)
    ).json();
    Entry.clearProject();
    Entry.loadProject(
      Object.keys(ExportedProject).reduce((acc, cur) => {
        acc[cur] = ProjectData[cur];
        return acc;
      }, {})
    );
    Entry.projectId = TempProjectId;
  }
}
// 리뉴얼 이후 장면 1 로드 함수
async function ExpressBlockLoadNew() {
  if (Entry.getMainWS() && Entry.projectId) {
    const TempProjectId = Entry.projectId;
    const ExportedProject = Entry.exportProject();
    const ProjectData = (
      await (
        await await fetch("https://playentry.org/graphql", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            query: ` query SELECT_PROJECT($id: ID! $groupId: ID) {
					project(id: $id, groupId: $groupId) {
						id
						name
						user {
							id
							nickname
							username
							profileImage {
								id
								name
								label {
									ko
									en
									ja
									vn
								}
								filename
								imageType
								dimension {
									width
									height
								}
								trimmed {
									filename
									width
									height
								}
							}
							status {
								following
								follower
							}
							description
							role
						}
						visit
						speed
						objects
						variables
						cloudVariable
						messages
						functions
						tables
						scenes
						thumb
						isopen
						blamed
						isPracticalCourse
						category
						categoryCode
						created
						updated
						shortenUrl
						parent {
							id
							name
							user {
								id
								username
								nickname
							}
						}
						likeCnt
						favorite
						special
						isForLecture
						isForStudy
						isForSubmit
						hashId
						complexity
						staffPicked
						ranked
						submitId {
							id
						}
						description
						description2
						description3
						hasRealTimeVariable
						realTimeVariable {
							variableType
							key
							value
							array {
								key
								data
							}
							minValue
							maxValue
							visible
							x
							y
							width
							height
							object
						}
						commentGroup {
							group
							count
						}
						likeCntGroup {
							group
							count
						}
						visitGroup {
							group
							count
						}
						recentGroup {
							group
							count
						}
						learning
						expansionBlocks
						aiUtilizeBlocks
						childCnt
					}
				}
				`,
            variables: { id: TempProjectId },
          }),
        })
      ).json()
    ).data.project;
    Entry.clearProject();
    Entry.loadProject(
      Object.keys(ExportedProject).reduce((acc, cur) => {
        acc[cur] = ProjectData[cur];
        return acc;
      }, {})
    );
    Entry.projectId = TempProjectId;
  }
}
ExpressBlockLoadNew();
