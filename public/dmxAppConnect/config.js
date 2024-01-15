dmx.config({
  "main": {
    "cookies": [
      {
        "type": "text",
        "name": "notification"
      }
    ]
  },
  "tasks": {
    "dvTaskList": {
      "meta": [
        {
          "name": "task_assigned_id",
          "type": "number"
        },
        {
          "name": "user_id",
          "type": "number"
        },
        {
          "name": "country",
          "type": "text"
        },
        {
          "name": "visa_type",
          "type": "text"
        },
        {
          "name": "task_type",
          "type": "text"
        },
        {
          "name": "your_notes",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "task_id",
          "type": "number"
        },
        {
          "name": "task_names",
          "type": "text"
        },
        {
          "name": "required",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "ddTasks": {
      "meta": [
        {
          "type": "number",
          "name": "task_list_id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "text",
          "name": "task_name"
        },
        {
          "type": "text",
          "name": "required"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "your_notes"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "created_on"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "task_assigned_id",
          "type": "number"
        },
        {
          "name": "user_id",
          "type": "number"
        },
        {
          "name": "country",
          "type": "text"
        },
        {
          "name": "visa_type",
          "type": "text"
        },
        {
          "name": "task_type",
          "type": "text"
        },
        {
          "name": "your_notes",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "task_id",
          "type": "number"
        },
        {
          "name": "task_names",
          "type": "text"
        },
        {
          "name": "required",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "ddTaskList": {
      "meta": [
        {
          "type": "number",
          "name": "task_list_id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "text",
          "name": "task_name"
        },
        {
          "type": "text",
          "name": "required"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "your_notes"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "created_on"
        }
      ],
      "outputType": "array"
    }
  },
  "resetpassword": {
    "query": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "resetpass": {
    "query": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "myprofile": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "visa_info_id"
        },
        {
          "type": "text",
          "name": "destination_country"
        },
        {
          "type": "text",
          "name": "from_country"
        },
        {
          "type": "text",
          "name": "visa_application_type"
        },
        {
          "type": "text",
          "name": "preffered_lang"
        },
        {
          "type": "text",
          "name": "package"
        }
      ],
      "outputType": "array"
    },
    "dvNotifications": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "application_id"
        },
        {
          "type": "text",
          "name": "notif_type"
        },
        {
          "type": "text",
          "name": "notif_name"
        },
        {
          "type": "text",
          "name": "notif_details"
        },
        {
          "type": "text",
          "name": "notif_link"
        },
        {
          "type": "datetime",
          "name": "created_on"
        },
        {
          "type": "text",
          "name": "checked_by_user"
        }
      ],
      "outputType": "array"
    },
    "repeatNotif": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "application_id"
        },
        {
          "type": "text",
          "name": "notif_type"
        },
        {
          "type": "text",
          "name": "notif_name"
        },
        {
          "type": "text",
          "name": "notif_details"
        },
        {
          "type": "text",
          "name": "notif_link"
        },
        {
          "type": "datetime",
          "name": "created_on"
        },
        {
          "type": "text",
          "name": "checked_by_user"
        }
      ],
      "outputType": "array"
    }
  },
  "dashboard": {
    "dvNavNotif": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "application_id"
        },
        {
          "type": "text",
          "name": "notif_type"
        },
        {
          "type": "text",
          "name": "notif_name"
        },
        {
          "type": "text",
          "name": "notif_details"
        },
        {
          "type": "text",
          "name": "notif_link"
        },
        {
          "type": "datetime",
          "name": "created_on"
        },
        {
          "type": "text",
          "name": "checked_by_user"
        }
      ],
      "outputType": "array"
    },
    "repeatNavNotif": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "user_id"
        },
        {
          "type": "number",
          "name": "application_id"
        },
        {
          "type": "text",
          "name": "notif_type"
        },
        {
          "type": "text",
          "name": "notif_name"
        },
        {
          "type": "text",
          "name": "notif_details"
        },
        {
          "type": "text",
          "name": "notif_link"
        },
        {
          "type": "datetime",
          "name": "created_on"
        },
        {
          "type": "text",
          "name": "checked_by_user"
        }
      ],
      "outputType": "array"
    }
  }
});
