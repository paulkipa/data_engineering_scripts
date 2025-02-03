fn(state => {
  const myNumber = Math.floor(Math.random() * 100);
  
  // Function to convert string to numeric value or null if empty
  const convertToNumeric = (value) => {
  if (value === null || value === undefined || value === '') {
    return 0;  // Return 0 if value is empty
  } else {
    const numericValue = parseFloat(value); // Convert string to float (adjust as needed)
    return isNaN(numericValue) ? 0 : numericValue; // Handle non-numeric strings
  }
};

  return { ...state, myNumber,convertToNumeric };
});


upsert(
    'case_management',
    ['case_id', 'reporting_period'],
    {
        case_id:dataValue("form.case['@case_id']") ,
        pax_group:dataValue('form.boy_demographics_information.pax_group')|| "",
        group_name:dataValue('form.boy_demographics_information.group_name')  || "",
        reporting_period:dataValue('form.monthly_boy_reporting_information.report_period') ,
        user_id:dataValue("form.case['@user_id']") ,
        date_created:dataValue("form.case['@date_modified']") ,
        date_modified:dataValue("form.case['@date_modified']"),
        linked_facility:dataValue('form.case.update.linked_facility'),
        the_county:dataValue('form.case.update.the_county'),
        the_cu_name:dataValue('form.case.update.the_cu_name'),
        the_location:dataValue('form.boy_group_details.the_location'),
        the_subcounty:dataValue('form.case.update.the_subcounty'),
        the_village:dataValue('form.case.update.the_village'),
        the_ward:dataValue('form.case.update.the_ward'),
    },
    {
        setNull: "'undefined'",
        logValues: true,
    }
);//case management: boy

upsert(
    'boy_anthropometric_information',
    ['case_id', 'reporting_period'],
    {
        date_created:dataValue("form.case['@date_modified']") ,
        case_id:dataValue("form.case['@case_id']") ,
        reporting_period:dataValue('form.monthly_boy_reporting_information.report_period'),
        bmi_calc:dataValue('form.boy_anthropometric_information.bmi_status_calc'),
        //bmi_value:dataValue('form.boy_anthropometric_information.bmi_boyvalue')||0,
        bmi_value: 0,//parseFloat(dataValue('form.boy_anthropometric_information.bmi_boyvalue')),
        heightcm:dataValue('form.boy_anthropometric_information.boy_heightcm')||'0',
        //muacvalue:dataValue('form.boy_anthropometric_information.boy_muacvalue')||'0',
        muacvalue: 0,
        weightkg:dataValue('form.boy_anthropometric_information.boy_weightkg')||'0',       
        muac_membr:dataValue('form.boy_anthropometric_information.muac_membr')||''
        

        
        
        
    },
    {
        setNull: "'undefined'",
        logValues: true,
    }
);//boy_anthropometric_information

upsert(
    'boy_demographics_information',
    ['case_id', 'reporting_period'],
    {
        date_created:dataValue("form.case['@date_modified']") ,
        case_id:dataValue("form.case['@case_id']") ,
        reporting_period:dataValue('form.monthly_boy_reporting_information.report_period'),

        HHID_hh:dataValue('form.boy_demographics_information.HHID_hh') ,
        HHID_output:dataValue('form.boy_demographics_information.HHID_output'),
        age:0,//dataValue('form.boy_demographics_information.age') ,
        socialstatus:dataValue('form.boy_demographics_information.boy_socialstatus'),
        lactating:dataValue('form.boy_demographics_information.boy_lactating'),
        pregnant:dataValue('form.boy_demographics_information.boy_pregnant'),
        group_name:dataValue('form.boy_demographics_information.group_name'),
        hvchildren0to5m:dataValue("form.boy_demographics_information['hvchildren0to5m']"),
        hvchildren10to14yrs:dataValue("form.boy_demographics_information['hvchildren10to14yrs']"),
        hvchildren15to19yrs:dataValue("form.boy_demographics_information['hvchildren15to19yrs']"),
        hvchildren24to59m:dataValue("form.boy_demographics_information['hvchildren24to59m']"),
        hvchildren5to9yrs:dataValue("form.boy_demographics_information['hvchildren5to9yrs']"),
        hvchildren6to23m:dataValue("form.boy_demographics_information['hvchildren6to23m']"),
        new_group_type:dataValue('form.boy_demographics_information.new_group_type'),
        no_female5to9yrs:dataValue('form.boy_demographics_information.no_female5to9yrs'),
        no_male5to9yrs:dataValue('form.boy_demographics_information.no_male5to9yrs'),
        participant_name:dataValue('form.boy_demographics_information.participant_name'),
        pax_group:dataValue('form.boy_demographics_information.pax_group'),
        sex:dataValue('form.boy_demographics_information.sex')
    },
    {
        setNull: "'undefined'",
        logValues: true,
    }
);//boy_demographics_information
upsert(
    'boy_monthly_interventions',
    ['case_id', 'reporting_period'],
    {
        date_created:dataValue("form.case['@date_modified']") ,
        case_id:dataValue("form.case['@case_id']") ,
        reporting_period:dataValue('form.monthly_boy_reporting_information.report_period'),
        grp_weekly_sessionscode:dataValue('form.boy_monthly_interventions.grp_weekly_sessionscode'),
        interv_healthnutrition:dataValue('form.boy_monthly_interventions.interv_healthnutrition'),
        interv_referral:dataValue('form.boy_monthly_interventions.interv_referral'),
        interv_referrals:dataValue('form.boy_monthly_interventions.interv_referrals'),
        interv_socialservices:dataValue('form.boy_monthly_interventions.interv_socialservices'),
        resillient_livelihoods:dataValue('form.boy_monthly_interventions.resillient_livelihoods'),
        transition_pathway:dataValue('form.boy_monthly_interventions.transition_pathway'),
        week1datetime:dataValue("form.boy_monthly_interventions['week1datetime']"),
        week2datetime:dataValue("form.boy_monthly_interventions['week2datetime']"),
        week3datetime:dataValue("form.boy_monthly_interventions['week3datetime']"),
        week4datetime:dataValue("form.boy_monthly_interventions['week4datetime']"),
        weekly_session_attended:dataValue('form.boy_monthly_interventions.weekly_session_attended')
	     
    },
    {
        setNull: "'undefined'",
        logValues: true,
    }
);//boy_monthly_interventions
upsert(
    'boy_sessions_information',
    ['case_id', 'reporting_period'],
    {
        date_created:dataValue("form.case['@date_modified']") ,
        case_id:dataValue("form.case['@case_id']") ,
        reporting_period:dataValue('form.monthly_boy_reporting_information.report_period'),
        demonstration:dataValue('form.boy_sessions_information.demonstration'),
	      products_distributed:dataValue('form.boy_sessions_information.products_distributed')
    },
    {
        setNull: "'undefined'",
        logValues: true,
    }
);//boy_sessions_information
