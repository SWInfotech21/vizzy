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
  }
});
