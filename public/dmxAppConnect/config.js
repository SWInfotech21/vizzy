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
    },
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "repeatCurrency": {
      "meta": [
        {
          "type": "number",
          "name": "currency_id"
        },
        {
          "type": "text",
          "name": "currency_name"
        },
        {
          "type": "text",
          "name": "currency_code"
        },
        {
          "type": "text",
          "name": "currency_symbol"
        }
      ],
      "outputType": "array"
    }
  },
  "notifications": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "offset"
      }
    ],
    "dvNotifications": {
      "meta": [
        {
          "name": "offset",
          "type": "number"
        },
        {
          "name": "limit",
          "type": "number"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "object",
          "sub": [
            {
              "name": "offset",
              "type": "object",
              "sub": [
                {
                  "name": "first",
                  "type": "number"
                },
                {
                  "name": "prev",
                  "type": "number"
                },
                {
                  "name": "next",
                  "type": "number"
                },
                {
                  "name": "last",
                  "type": "number"
                }
              ]
            },
            {
              "name": "current",
              "type": "number"
            },
            {
              "name": "total",
              "type": "number"
            }
          ]
        },
        {
          "name": "data",
          "type": "array",
          "sub": [
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
          ]
        }
      ],
      "outputType": "object"
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
  "billing": {
    "repeatCardList": {
      "meta": [
        {
          "type": "text",
          "name": "card_number"
        },
        {
          "type": "text",
          "name": "card_holder_name"
        },
        {
          "type": "text",
          "name": "expiry_date"
        },
        {
          "type": "text",
          "name": "cvv_code"
        },
        {
          "type": "text",
          "name": "primary_card"
        }
      ],
      "outputType": "array"
    },
    "ddCardList": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "card_number"
        },
        {
          "type": "text",
          "name": "card_holder_name"
        },
        {
          "type": "text",
          "name": "expiry_date"
        },
        {
          "type": "text",
          "name": "cvv_code"
        },
        {
          "type": "text",
          "name": "primary_card"
        }
      ],
      "outputType": "array"
    },
    "ddBillingAddressList": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "billing_place"
        },
        {
          "type": "text",
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "billing_email"
        },
        {
          "type": "text",
          "name": "tax_id"
        },
        {
          "type": "text",
          "name": "vat_number"
        },
        {
          "type": "text",
          "name": "billing_mobile"
        },
        {
          "type": "text",
          "name": "billing_country"
        },
        {
          "type": "text",
          "name": "billing_address"
        },
        {
          "type": "text",
          "name": "state"
        },
        {
          "type": "text",
          "name": "zip_code"
        }
      ],
      "outputType": "array"
    },
    "repeatAddressList": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "billing_place"
        },
        {
          "type": "text",
          "name": "company_name"
        },
        {
          "type": "text",
          "name": "billing_email"
        },
        {
          "type": "text",
          "name": "tax_id"
        },
        {
          "type": "text",
          "name": "vat_number"
        },
        {
          "type": "text",
          "name": "billing_mobile"
        },
        {
          "type": "text",
          "name": "billing_country"
        },
        {
          "type": "text",
          "name": "billing_address"
        },
        {
          "type": "text",
          "name": "state"
        },
        {
          "type": "text",
          "name": "zip_code"
        }
      ],
      "outputType": "array"
    }
  },
  "news": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "limit"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ],
    "ddNewsList": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "image1"
        },
        {
          "type": "text",
          "name": "image2"
        },
        {
          "type": "text",
          "name": "image3"
        },
        {
          "type": "text",
          "name": "heading"
        },
        {
          "type": "text",
          "name": "sub_heading"
        },
        {
          "type": "text",
          "name": "description1"
        },
        {
          "type": "text",
          "name": "description2"
        },
        {
          "type": "text",
          "name": "description3"
        },
        {
          "type": "text",
          "name": "source"
        },
        {
          "type": "text",
          "name": "source_link"
        },
        {
          "type": "datetime",
          "name": "created"
        },
        {
          "type": "datetime",
          "name": "modified_on"
        }
      ],
      "outputType": "array"
    },
    "repeatNewsList": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "image1"
        },
        {
          "type": "text",
          "name": "image2"
        },
        {
          "type": "text",
          "name": "image3"
        },
        {
          "type": "text",
          "name": "heading"
        },
        {
          "type": "text",
          "name": "sub_heading"
        },
        {
          "type": "text",
          "name": "description1"
        },
        {
          "type": "text",
          "name": "description2"
        },
        {
          "type": "text",
          "name": "description3"
        },
        {
          "type": "text",
          "name": "source"
        },
        {
          "type": "text",
          "name": "source_link"
        },
        {
          "type": "datetime",
          "name": "created"
        },
        {
          "type": "datetime",
          "name": "modified_on"
        }
      ],
      "outputType": "array"
    }
  }
});
