import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const faqData = [
    {
      question: "What is illegal dumping of hazardous waste?",
      answer:
        "Illegal dumping refers to disposing of hazardous waste in non-designated areas, often causing environmental harm. To identify it, look for signs of waste in open or water areas. You should report it to local environmental authorities and gather photographic evidence if it's safe.",
    },
    {
      question: "How can I identify deforestation without permission?",
      answer:
        "Deforestation without permission involves cutting down trees without legal approval. It can be identified by noticing large clearings in forested areas or missing wildlife. Contact the forest department or raise awareness in local communities.",
    },
    {
      question: "What should I do if I spot wildlife protection law violations?",
      answer:
        "If you spot wildlife protection violations, such as poaching or harm to protected species, report it to wildlife authorities immediately. Avoid confrontation with poachers and raise awareness about wildlife protection.",
    },
    {
      question: "What is unauthorized mining, and how to report it?",
      answer:
        "Unauthorized mining activities happen when mining occurs without proper permits, leading to environmental degradation. These activities can be identified by large-scale excavation or mining in non-designated areas. Report it to mining or environmental authorities with detailed documentation.",
    },
    {
      question: "What is plagiarism of copyrighted works?",
      answer:
        "Plagiarism is using someone else's work without credit. It can be identified by checking for duplicate or uncredited works. You should inform the copyright owner and report it to the relevant authorities or platforms.",
    },
    {
      question: "How to identify unauthorized use of trademarks?",
      answer:
        "Unauthorized use of trademarks occurs when someone uses a registered logo or name without permission. Look for logos or names that resemble registered trademarks. Notify the trademark authorities or the trademark owner.",
    },
    {
      question: "What is counterfeiting and how to identify it?",
      answer:
        "Counterfeiting refers to producing fake currency or goods. It can be identified by unusual markings on the goods or currency. Report it to local authorities and avoid distributing counterfeit items.",
    },
    {
      question: "How to recognize and avoid rioting?",
      answer:
        "Rioting involves participating in violent public disturbances. You can identify it by observing large groups engaging in violent activities. It’s important to stay away from the area and alert law enforcement immediately.",
    },
    {
      question: "What is bigamy and how can it be reported?",
      answer:
        "Bigamy is the act of marrying more than one person simultaneously. It can be identified by checking for conflicting marriage records. Report it to legal authorities and consult family law specialists.",
    },
    {
      question: "How can I identify smuggling activities?",
      answer:
        "Smuggling involves illegal transportation of goods or people. It can be identified by looking for unmarked vehicles or suspicious border activities. Inform customs or border patrol and prioritize safety by avoiding direct intervention.",
    },
    {
      question: "What are the signs of slavery or forced labor?",
      answer:
        "Signs of slavery or forced labor include individuals working under coercion or without pay in restrictive conditions. Report it to human rights organizations or local authorities and offer support to the affected individuals.",
    },
    {
      question: "What constitutes medical negligence?",
      answer:
        "Medical negligence refers to harm caused by healthcare professionals failing to meet standards of care. This includes improper treatment, misdiagnoses, or substandard practices. File complaints with medical boards or healthcare institutions.",
    },
    {
      question: "How do I report illegal dumping of hazardous waste?",
      answer:
        "Report illegal dumping by contacting local environmental authorities. It's important to gather photographic evidence and avoid direct contact with the hazardous materials.",
    },
    {
      question: "What can I do if I suspect unauthorized logging?",
      answer:
        "Unauthorized logging can be reported to the forest department. Always stay aware of the signs, like large areas of cleared forest, and raise awareness in the community.",
    },
    {
      question: "How can I identify wildlife protection law violations?",
      answer:
        "Look out for reports of poaching or suspicious activity in wildlife areas. If you spot violations, inform local authorities and raise awareness about wildlife protection.",
    },
    {
      question: "How can I assist in reporting illegal mining?",
      answer:
        "To report illegal mining, gather information about the location and activity, then report it to the mining or environmental authorities. Documentation can help substantiate your report.",
    },
    {
      question: "What to do if I spot intellectual property theft?",
      answer:
        "If you encounter intellectual property theft, such as plagiarism or unauthorized use of trademarks, you should report it to the relevant authorities and inform the rightful owners.",
    },
    {
      question: "How to identify counterfeit currency?",
      answer:
        "Counterfeit currency can be identified by unusual markings or irregularities in the currency. Report counterfeit items to local law enforcement immediately.",
    },
    {
      question: "How can I avoid getting involved in riots?",
      answer:
        "Avoid getting involved by staying away from the area and reporting any violent activities to law enforcement. It's important to prioritize safety and inform the authorities.",
    },
    {
      question: "What are the legal steps if I spot bigamy?",
      answer:
        "In the case of bigamy, report it to the legal authorities and consult family law specialists. Check marriage records to identify conflicting marriages.",
    },
    {
      question: "What is the best way to handle smuggling activities?",
      answer:
        "If you suspect smuggling, avoid direct confrontation and report it to border patrol or customs authorities. It's important to prioritize your safety while providing information.",
    },
    {
      question: "What is medical negligence, and how can I report it?",
      answer:
        "Medical negligence involves failing to meet proper healthcare standards. If you encounter such cases, report them to the relevant medical boards or file complaints with the healthcare institution.",
    },
    {
      question: "How can I report a cybercrime?",
      answer:
        "Cybercrime can be reported to your local law enforcement or a national cybercrime unit. Provide details like the type of crime, any digital evidence, and the suspect's online activities.",
    },
    {
      question: "What is identity theft, and how can I protect myself?",
      answer:
        "Identity theft occurs when someone uses your personal information without permission. Protect yourself by using strong passwords, monitoring financial accounts, and reporting any suspicious activities to authorities.",
    },
    {
      question: "How can I spot fraudulent online services?",
      answer:
        "Fraudulent online services often promise unrealistic results or require upfront payments. Be cautious of unverified websites and always check reviews or conduct research before making transactions.",
    },
    {
      question: "What is the process for reporting corruption?",
      answer:
        "Corruption can be reported to anti-corruption authorities or agencies like the Ombudsman. Gather evidence and follow proper channels to ensure your report is handled securely.",
    },
    {
      question: "How can I report child labor?",
      answer:
        "Child labor should be reported to child welfare organizations or local authorities. Look for signs of children working under exploitative conditions, and avoid direct confrontation.",
    },
    {
      question: "What should I do if I suspect domestic violence?",
      answer:
        "If you suspect domestic violence, contact local law enforcement or domestic violence helplines. Provide as much information as you can while prioritizing safety for both yourself and the victim.",
    },
    {
      question: "How do I report cases of human trafficking?",
      answer:
        "Human trafficking can be reported to local law enforcement, human rights organizations, or through specialized hotlines. It's important to provide as much information as possible while ensuring the safety of the individuals involved.",
    },
    {
      question: "What should I do if I suspect fraudulent activities in a business?",
      answer:
        "If you suspect fraudulent activities, gather any available evidence, such as unusual financial transactions, and report it to the relevant authorities or consumer protection agencies. Avoid engaging with the suspects directly and prioritize safety.",
    },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 6;
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = faqData.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(faqData.length / questionsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {currentQuestions.map((faq, index) => (
          <div key={index} className="faq-card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="page-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="page-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FAQ;
