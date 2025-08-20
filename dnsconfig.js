var REG_NONE = NewRegistrar("none");
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare_catfordgreen', {"manage_redirects": true});

D("catfordgreen.org.uk", REG_NONE, DnsProvider(DNS_CLOUDFLARE),
  ALIAS('@', 'catfordgreen.github.io.'),
  CNAME('www', 'catfordgreen.github.io.'),

  SPF_BUILDER({
    label: "@",
    parts: [
        "v=spf1",
        "-all"
    ]
  }),
);