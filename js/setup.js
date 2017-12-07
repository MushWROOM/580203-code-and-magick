'use strict';
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var getRandomElement = function(arrayElements) {
  var randomElement = arrayElements[Math.floor(Math.random() * arrayElements.length)];
  return randomElement;
};
var createWizards = function (name, surname, coatColor, eyesColor) {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var fullname = getRandomElement(name) + ' ' + getRandomElement(surname);
    var wizardCoatColor = getRandomElement(coatColor);
    var wizardEyesColor = getRandomElement(eyesColor);
    wizards[i] = {
      name: fullname,
      coat: wizardCoatColor,
      eyes: wizardEyesColor
    };
  }
  return wizards;
};
var createOneNewWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};
var appendFragment = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createOneNewWizard(wizards[i]));
  }
  return fragment;
};
var wizards = createWizards(names, surnames, coatColors, eyesColors);
similarListElement.appendChild(appendFragment(wizards));
userDialog.querySelector('.setup-similar').classList.remove('hidden');
