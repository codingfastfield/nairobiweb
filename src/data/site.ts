export const SITE = {
  name: 'Nairobi Web Developers',
  url: 'https://nairobiwebdevelopers.co.ke',
  phone: '+254700009945',
  phoneDisplay: '+254 700 009 945',
  wa: 'https://wa.me/254700009945',
  email: 'hello@nairobiwebdevelopers.co.ke',
};
export const ksh = (n: number) => 'KSh ' + n.toLocaleString('en-KE');
export const waLink = (msg: string) => `${SITE.wa}?text=${encodeURIComponent(msg)}`;
