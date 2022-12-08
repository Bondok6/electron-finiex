<template>
  <el-container
    class="container border-radius-20 box-shadow d-block ma-4 mb-0 px-2 py-3 invoice-table"
  >
    <br />
    <div class="text-center">
      <h1 style="color:#64688E;">
        {{
          $t(
            "the-fiscal-year-will-be-closed-and-a-new-fiscal-year-will-be-opened"
          )
        }}
      </h1>
    </div>
    <div class="text-center">
      <h1 style="color:#64688E;">
        {{ $t("are-you-sure-you-want-to-close-the-current-fiscal-year?") }}
      </h1>
    </div>
  </el-container>
</template>
