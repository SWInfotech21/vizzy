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
  "myprofile": {}
});
