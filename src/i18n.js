import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      portalName: "Healthcare Portal",
      heroTitle: "Easy access to healthcare information",
      heroSubtitle: "Clear, reliable guidance for everyday health needs and emergency support.",
      healthInfo: "Health Info",
      findDoctor: "Find Doctor",
      emergencyHelp: "Emergency Help",
      healthInfoTitle: "Health Information",
      healthInfoSubtitle: "Simple, text-first guidance for common health needs.",
      commonSymptoms: "Common symptoms",
      diseases: "Diseases",
      prevention: "Prevention",
      findDoctorTitle: "Find Doctor / Facility",
      findDoctorSubtitle: "Search by location and specialty for nearby support.",
      location: "Location",
      specialty: "Specialty",
      search: "Search",
      appointmentTitle: "Appointment Request",
      appointmentSubtitle: "Submit a request. We will contact you with confirmation.",
      name: "Name",
      phone: "Phone",
      preferredDate: "Preferred date",
      submitRequest: "Submit request",
      confirmation: "Thank you. Your request has been received.",
      emergencyTitle: "Emergency Help",
      emergencySubtitle: "Immediate support and local emergency numbers.",
      callNow: "Call now",
      footerAccess: "Accessibility statement",
      footerContact: "Contact / NGO info",
      increaseText: "Increase text size",
      decreaseText: "Decrease text size",
      highContrast: "High contrast",
      languages: "Language"
    }
  },
  hi: {
    translation: {
      portalName: "स्वास्थ्य पोर्टल",
      heroTitle: "स्वास्थ्य जानकारी तक आसान पहुंच",
      heroSubtitle: "रोज़मर्रा की स्वास्थ्य ज़रूरतों और आपात सहायता के लिए स्पष्ट मार्गदर्शन।",
      healthInfo: "स्वास्थ्य जानकारी",
      findDoctor: "डॉक्टर खोजें",
      emergencyHelp: "आपात सहायता",
      healthInfoTitle: "स्वास्थ्य जानकारी",
      healthInfoSubtitle: "सामान्य स्वास्थ्य ज़रूरतों के लिए सरल मार्गदर्शन।",
      commonSymptoms: "सामान्य लक्षण",
      diseases: "बीमारियाँ",
      prevention: "रोकथाम",
      findDoctorTitle: "डॉक्टर / सुविधा खोजें",
      findDoctorSubtitle: "स्थान और विशेषज्ञता से खोजें।",
      location: "स्थान",
      specialty: "विशेषज्ञता",
      search: "खोजें",
      appointmentTitle: "अपॉइंटमेंट अनुरोध",
      appointmentSubtitle: "अनुरोध भेजें। हम पुष्टि के लिए संपर्क करेंगे।",
      name: "नाम",
      phone: "फोन",
      preferredDate: "पसंदीदा तारीख",
      submitRequest: "अनुरोध भेजें",
      confirmation: "धन्यवाद। ���पका अनुरोध प्राप्त हो गया है।",
      emergencyTitle: "आपात सहायता",
      emergencySubtitle: "तुरंत सहायता और स्थानीय आपात नंबर।",
      callNow: "अभी कॉल करें",
      footerAccess: "सुलभता वक्तव्य",
      footerContact: "संपर्क / NGO जानकारी",
      increaseText: "पाठ आकार बढ़ाएँ",
      decreaseText: "पाठ आकार घटाएँ",
      highContrast: "उच्च कंट्रास्ट",
      languages: "भाषा"
    }
  },
  local: {
    translation: {
      portalName: "સ્થાનિક આરોગ્ય પોર્ટલ",
      heroTitle: "આરોગ્ય માહિતી સુધી સરળ પહોંચ",
      heroSubtitle: "દરરોજની જરૂરિયાતો અને તાત્કાલિક મદદ માટે સ્પષ્ટ માર્ગદર્શન.",
      healthInfo: "આરોગ્ય માહિતી",
      findDoctor: "ડૉક્ટર શોધો",
      emergencyHelp: "ઇમર્જન્સી મદદ",
      healthInfoTitle: "આરોગ્ય માહિતી",
      healthInfoSubtitle: "સામાન્ય આરોગ્ય માટે સહેલો માર્ગદર્શક.",
      commonSymptoms: "સામાન્ય લક્ષણો",
      diseases: "રોગો",
      prevention: "નિવારણ",
      findDoctorTitle: "ડૉક્ટર / સુવિધા શોધો",
      findDoctorSubtitle: "સ્થાન અને નિષ્ણાતીથી શોધો.",
      location: "સ્થાન",
      specialty: "નિષ્ણાતી",
      search: "શોધો",
      appointmentTitle: "એપોઇન્ટમેન્ટ વિનંતી",
      appointmentSubtitle: "વિનંતી મોકલો. પુષ્ટિ માટે સંપર્ક કરવામાં આવશે.",
      name: "નામ",
      phone: "ફોન",
      preferredDate: "પસંદીદા તારીખ",
      submitRequest: "વિનંતી મોકલો",
      confirmation: "આભાર. તમારી વિનંતી મળી ગઈ છે.",
      emergencyTitle: "ઇમર્જન્સી મદદ",
      emergencySubtitle: "તાત્કાલિક સહાય અને સ્થાનિક ઇમર્જન્સી નંબર.",
      callNow: "હમણાં કોલ કરો",
      footerAccess: "પ્રવેશযোগ্যતા નિવેદન",
      footerContact: "સંપર્ક / NGO માહિતી",
      increaseText: "લખાણનું કદ વધારો",
      decreaseText: "લખાણનું કદ ઘટાડો",
      highContrast: "હાઇ કોન્ટ્રાસ્ટ",
      languages: "ભાષા"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;