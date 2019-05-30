# adapt-assessmentUseAttempts

An extension that allows use attempts spent in the assessment to setup questions banks.

The value of the `"_attemptsSpent"` determines which quiz bank to display.

It can be used only in conjunction with [adapt-contrib-assessment](https://github.com/adaptlearning/adapt-contrib-assessment).

For example JSON format, see [*example.json*](http://github.com/nachocinalli/adapt-assessmentUseAttempts/blob/master/example.json)

### Attributes  

#### *course.json*  
The following attributes, set within *course.json*

>**_isEnabled** (boolean): Turns assessmentUseAttempts on or off. Acceptable values are `true` or `false`.

>**_totalQuestions** (number): number of questions to be drawn from each identified block.   