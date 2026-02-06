(function(networkId) {
  var automaticIntegrations = {
    "googleAnalytics": {
      "paramName": "g_cid"
    },
    "gaMeasurementId": {
      "paramName": "ga_measurement_id"
    },
    "gaSessionId": {
      "paramName": "ga_session_id"
    }
  };

  var cacheLifetimeDays = 30;

  var customDataWaitForConfig = [
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("Queue", "Last", "URLParam", "");
      },
      paramName: "Queue",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("TestMany3", "Last", "URLParam", "");
      },
      paramName: "TestMany3",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("_pwk_id", "Last", "URLParam", "");
      },
      paramName: "_pwk_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("_ttp", "Last", "URLParam", "");
      },
      paramName: "_ttp",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("advertiser_name", "Unique", "URLParam", "");
      },
      paramName: "advertiser_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("advertiser_name1", "Last", "URLParam", "");
      },
      paramName: "advertiser_name1",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("agent", "Last", "URLParam", "");
      },
      paramName: "agent",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("agent_answered_at", "Last", "URLParam", "");
      },
      paramName: "agent_answered_at",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("agent_full_name", "Last", "URLParam", "");
      },
      paramName: "agent_full_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("agent_name", "Last", "URLParam", "");
      },
      paramName: "agent_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("agenttest", "Last", "URLParam", "");
      },
      paramName: "agenttest",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("call_sentiment_overall_label", "Unique", "URLParam", "");
      },
      paramName: "call_sentiment_overall_label",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "location.href");
      },
      paramName: "calling_page",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("calling_page_old", "Last", "URLParam", "");
      },
      paramName: "calling_page_old",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("campaign_name", "Last", "URLParam", "");
      },
      paramName: "campaign_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("car", "Unique", "URLParam", "");
      },
      paramName: "car",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ccaas_acd_queue", "Last", "URLParam", "");
      },
      paramName: "ccaas_acd_queue",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ccaas_agent_id", "Last", "URLParam", "");
      },
      paramName: "ccaas_agent_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ccaas_call_priority", "Last", "URLParam", "");
      },
      paramName: "ccaas_call_priority",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ccaas_language_skill", "Last", "URLParam", "");
      },
      paramName: "ccaas_language_skill",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("consent_cookie", "Last", "URLParam", "");
      },
      paramName: "consent_cookie",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("consumer_name", "Last", "URLParam", "");
      },
      paramName: "consumer_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("contact_center_disposition", "Last", "URLParam", "");
      },
      paramName: "contact_center_disposition",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("conversation_languages", "Last", "URLParam", "");
      },
      paramName: "conversation_languages",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("customer_id", "Last", "URLParam", "");
      },
      paramName: "customer_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("decibel_session_id", "Last", "URLParam", "");
      },
      paramName: "decibel_session_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("demo_zip_code", "Last", "URLParam", "");
      },
      paramName: "demo_zip_code",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("destination_time_zone", "Unique", "URLParam", "");
      },
      paramName: "destination_time_zone",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("disposition", "Last", "URLParam", "");
      },
      paramName: "disposition",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("e", "Last", "URLParam", "");
      },
      paramName: "e",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("email_name", "Last", "URLParam", "");
      },
      paramName: "email_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("evaluated_by", "Unique", "URLParam", "");
      },
      paramName: "evaluated_by",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("evaluated_by1", "Last", "URLParam", "");
      },
      paramName: "evaluated_by1",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("external_call_unique_id", "Last", "URLParam", "");
      },
      paramName: "external_call_unique_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("fbc", "Last", "URLParam", "");
      },
      paramName: "fbc",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("fbclid", "Last", "URLParam", "");
      },
      paramName: "fbclid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("fbp", "Last", "URLParam", "");
      },
      paramName: "fbp",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("fp_userid", "Last", "URLParam", "");
      },
      paramName: "fp_userid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("gbraid", "Last", "URLParam", "");
      },
      paramName: "gbraid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("gclid", "Unique", "URLParam", "");
      },
      paramName: "gclid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("invoca_caller_language", "Last", "URLParam", "");
      },
      paramName: "invoca_caller_language",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("irclickid", "Last", "URLParam", "");
      },
      paramName: "irclickid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("j", "Last", "URLParam", "");
      },
      paramName: "j",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("jb", "Last", "URLParam", "");
      },
      paramName: "jb",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("jo_mdf", "Last", "URLParam", "");
      },
      paramName: "jo_mdf",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("jo_short_field_sixty", "Last", "URLParam", "");
      },
      paramName: "jo_short_field_sixty",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("jo_short_field_sixty_one", "Last", "URLParam", "");
      },
      paramName: "jo_short_field_sixty_one",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("l", "Last", "URLParam", "");
      },
      paramName: "l",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("landing_page", "Last", "JavascriptDataLayer", "location.href");
      },
      paramName: "landing_page",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("line_of_biz", "Last", "URLParam", "");
      },
      paramName: "line_of_biz",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("local_h_rep", "Unique", "URLParam", "");
      },
      paramName: "local_h_rep",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("lt_first_touch", "First", "URLParam", "");
      },
      paramName: "lt_first_touch",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("lt_last_touch", "Last", "URLParam", "");
      },
      paramName: "lt_last_touch",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("lt_multi_touch", "Multi", "URLParam", "");
      },
      paramName: "lt_multi_touch",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("lt_unique_id", "Unique", "URLParam", "");
      },
      paramName: "lt_unique_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("marketing_channel", "Last", "URLParam", "");
      },
      paramName: "marketing_channel",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("match_id", "Last", "URLParam", "");
      },
      paramName: "match_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("mcid", "Last", "URLParam", "");
      },
      paramName: "mcid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("media_type", "Last", "URLParam", "");
      },
      paramName: "media_type",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("mid", "Last", "URLParam", "");
      },
      paramName: "mid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("mpid", "Last", "URLParam", "");
      },
      paramName: "mpid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("msclkid", "Unique", "URLParam", "");
      },
      paramName: "msclkid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("my_gua_property_id", "Last", "URLParam", "");
      },
      paramName: "my_gua_property_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("offer_field_value", "Last", "URLParam", "");
      },
      paramName: "offer_field_value",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("omeeds_field", "Last", "URLParam", "");
      },
      paramName: "omeeds_field",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("pages_visited", "Multi", "JavascriptDataLayer", "location.href");
      },
      paramName: "pages_visited",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("piwik_endpoint", "Last", "URLParam", "");
      },
      paramName: "piwik_endpoint",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("pk_visitor_id", "Last", "URLParam", "");
      },
      paramName: "pk_visitor_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("pn_from_zip_code", "Last", "URLParam", "");
      },
      paramName: "pn_from_zip_code",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("polaris_workflow_id", "Last", "URLParam", "");
      },
      paramName: "polaris_workflow_id",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("qced_by", "Unique", "URLParam", "");
      },
      paramName: "qced_by",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("queue_kam_test", "Last", "URLParam", "");
      },
      paramName: "queue_kam_test",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("rdt_cid", "Last", "URLParam", "");
      },
      paramName: "rdt_cid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("reviewed_by", "Unique", "URLParam", "");
      },
      paramName: "reviewed_by",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("sk", "Last", "URLParam", "");
      },
      paramName: "sk",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("skill_name", "Last", "URLParam", "");
      },
      paramName: "skill_name",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("sms_session_status", "Last", "URLParam", "");
      },
      paramName: "sms_session_status",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("tealium_vid", "Last", "URLParam", "");
      },
      paramName: "tealium_vid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("test_field", "Last", "URLParam", "");
      },
      paramName: "test_field",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("test_long_text_type", "Last", "URLParam", "");
      },
      paramName: "test_long_text_type",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("test_many_categories", "Last", "URLParam", "");
      },
      paramName: "test_many_categories",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("testmany4", "Last", "URLParam", "");
      },
      paramName: "testmany4",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("testmany6", "Last", "URLParam", "");
      },
      paramName: "testmany6",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("transcript_summary", "Last", "URLParam", "");
      },
      paramName: "transcript_summary",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ttclid", "Last", "URLParam", "");
      },
      paramName: "ttclid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("ua", "Last", "URLParam", "");
      },
      paramName: "ua",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", "");
      },
      paramName: "utm_campaign",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", "");
      },
      paramName: "utm_content",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", "");
      },
      paramName: "utm_medium",
      fallbackValue: function() {
        return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null;
      }
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", "");
      },
      paramName: "utm_source",
      fallbackValue: function() {
        return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null;
      }
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("vwo_uuid", "Last", "URLParam", "");
      },
      paramName: "vwo_uuid",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("wbraid", "Last", "URLParam", "");
      },
      paramName: "wbraid",
      fallbackValue: null
    }
  ];

  var customDataWaitForConfigAnonymousFunctions = [
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", function() {
          return ( location.href) ;
        })
      },
      paramName: "calling_page",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("landing_page", "Last", "JavascriptDataLayer", function() {
          return ( location.href) ;
        })
      },
      paramName: "landing_page",
      fallbackValue: null
    },
    {
      on: function() {
        return Invoca.Client.parseCustomDataField("pages_visited", "Multi", "JavascriptDataLayer", function() {
          return ( location.href) ;
        })
      },
      paramName: "pages_visited",
      fallbackValue: null
    }
  ];

  var defaultCampaignId = "9938164";

  var destinationSettings = {
    paramName: "invoca_detected_destination",
    matchLocalNumbers: false,
    matchTollFreeNumbers: false
  };

  var numbersToReplace = null;

  var organicSources = true;

  var reRunAfter = null;

  var requiredParams = null;

  var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

  var waitFor = 0;

  var customCodeIsSet = (function() {
    Invoca.Client.customCode = function(options) {
      return options;
    };

    return true;
  })();

  var generatedOptions = {
    active: true,
    autoSwap: true,
    cookieDays: cacheLifetimeDays,
    country: "US",
    dataSilo: "us",
    defaultCampaignId: defaultCampaignId,
    destinationSettings: destinationSettings,
    disableUrlParams: [],
    doNotSwap: [],
    integrations: automaticIntegrations,
    maxWaitFor: waitFor,
    networkId: networkId || null,
    numberToReplace: numbersToReplace,
    organicSources: organicSources,
    poolParams: {},
    reRunAfter: reRunAfter,
    requiredParams: requiredParams,
    resetCacheOn: resetCacheOn,
    waitForData: customDataWaitForConfig,
    waitForDataAnonymousFunctions: customDataWaitForConfigAnonymousFunctions
  };

  Invoca.Client.startFromWizard(generatedOptions);

})(504);
