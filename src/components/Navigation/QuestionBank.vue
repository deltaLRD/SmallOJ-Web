<template>
    <h1>
        QuestionBank
    </h1>
    <div>
      <RouterLink to="/question_bank/questions" class="link-style">Questions</RouterLink>&nbsp;
      <RouterLink to="/question_bank/submit" class="link-style">Submit</RouterLink>&nbsp;
      <RouterLink to="/question_bank/submissions" class="link-style">Submissions</RouterLink>
      <RouterView></RouterView>
    </div>
</template>