const contains = (jobTitle, value) => {
  const lowerJobTitle = jobTitle.toLowerCase();
  const lowerValue = value.toLowerCase();

  const splitedValue = lowerValue.split(" ");

  let result;

  splitedValue.forEach((split) => {
    if (lowerJobTitle.includes(split)) {
      result = true;
    }
  });

  return result;
};

const normalize = (value) => {
  const jobTitles = [
    "Architect",
    "Software engineer",
    "Quantity surveyor",
    "Accountant",
  ];

  let result;

  jobTitles.map((jobTitle) => {
    const match = contains(jobTitle, value);

    if (match) {
      result = jobTitle;
    }
  });

  return result;
};

const inputs = [
  "Java Engineer",
  "C# Engineer",
  "Accountant",
  "Chief Accountant",
  "Frontend Architect",
  "Cloud Architect",
  "Junior Quantity surveyor",
  "Senior Quantity surveyor",
];

inputs.forEach((element) => {
  const normalized = normalize(element);

  console.log(normalized);
});
