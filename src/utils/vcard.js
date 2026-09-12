// Helper to generate and download RFC-compliant vCard (.vcf) file

export const generateVCard = (data) => {
  const vcardLines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:A S;Mallikarjunappa;Adv.;;",
    `FN:${data.displayName}`,
    `ORG:${data.profession}`,
    `TITLE:${data.profession}`,
    `TEL;TYPE=CELL,VOICE,PREF:+91${data.phones.primary}`,
    `TEL;TYPE=WORK,VOICE:+91${data.phones.secondary}`,
    `ADR;TYPE=WORK,POSTAL:;;${data.office.building}, ${data.office.street}, ${data.office.area};${data.office.city};${data.office.state};${data.office.pincode};India`,
    `LABEL;TYPE=WORK:${data.office.fullAddress}`,
    `NOTE:${data.experienceFull} | ${data.court} | Practice Areas: Civil, Criminal, Family, Property & Notarial Services`,
    `URL:${data.office.googleMapsUrl}`,
    "END:VCARD"
  ];

  return vcardLines.join("\r\n");
};

export const downloadVCard = (data) => {
  try {
    const vcardString = generateVCard(data);
    const blob = new Blob([vcardString], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Adv_Mallikarjunappa_AS_Contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error("Error downloading vCard:", error);
    return false;
  }
};
