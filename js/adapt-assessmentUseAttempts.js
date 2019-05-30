define(["coreJS/adapt"], function (Adapt) {
  Adapt.once("adapt:initialize", function () {
    var article = require('extensions/adapt-contrib-assessment/js/adapt-assessmentArticleModel');
    var QuestionBank = require('extensions/adapt-contrib-assessment/js/adapt-assessmentQuestionBank')
    var assessmentUseAttempts = Adapt.course.get('_assessmentUseAttempts');
    if (assessmentUseAttempts && assessmentUseAttempts._isEnabled) {
      Adapt.articles.forEach(function (article) {
        if (!article._setupBanks) return;
        article._setupBanks = function () {

          var totalQuestions = assessmentUseAttempts._totalQuestions

          var bankId;

          this._questionBanks = [];
          var _attempt = this.get('_attemptsSpent');

          bankId = (_attempt + 1);

          var questionBank = new QuestionBank(bankId,
            this.get("_id"),
            totalQuestions,
            true);

          this._questionBanks[bankId] = questionBank;

          //add blocks to banks
          var children = _.filter(this.getChildren().models, function (block) {
            return block.get('_assessment')._quizBankID == bankId;
          });;

          for (var j = 0, count = children.length; j < count; j++) {
            var blockModel = children[j];

            var blockAssessmentConfig = blockModel.get('_assessment');

            bankId = blockAssessmentConfig._quizBankID;

            this._questionBanks[bankId].addBlock(blockModel);

          }
        }

      });
    }
  });

});
