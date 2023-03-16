SQL_SOURCES = [
    dict(name='BigQuery'),
    dict(
        name='Microsoft SQL Server',
        uuid='mssql',
    ),
    dict(name='MongoDB'),
    dict(name='MySQL'),
    dict(name='PostgreSQL'),
    dict(name='Redshift'),
]

SOURCES = sorted([
    dict(name='Amazon S3'),
    dict(name='Amplitude'),
    dict(name='Api'),
    dict(name='Azure Blob Storage'),
    dict(name='Chargebee'),
    dict(name='Commercetools'),
    dict(name='Couchbase'),
    dict(name='Datadog'),
    dict(name='Facebook Ads'),
    dict(name='Freshdesk'),
    dict(name='Front'),
    dict(name='Google Analytics'),
    dict(name='Google Search Console'),
    dict(name='Google Sheets'),
    dict(name='HubSpot'),
    dict(name='Intercom'),
    dict(name='LinkedIn Ads'),
    dict(name='Monday'),
    dict(name='Outreach'),
    dict(name='Paystack'),
    dict(name='Pipedrive'),
    dict(name='Postmark'),
    dict(name='Salesforce'),
    dict(name='Stripe'),
    dict(name='Zendesk'),
] + SQL_SOURCES, key=lambda x: x['name'])
