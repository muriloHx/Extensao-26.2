<script setup>
import { onMounted, ref, watch } from "vue";
import { RefreshCw } from "@lucide/vue";
import { useCaptcha } from "vue-client-recaptcha";

const props = defineProps({
  modelValue: { type: String, default: "" },
  count: { type: Number, default: 5 },
  width: { type: Number, default: 150 },
  height: { type: Number, default: 46 }
});

const emit = defineEmits(["update:valid", "refresh"]);
const canvas = ref(null);
const { code, generate, validate } = useCaptcha(() => ({
  count: props.count,
  charsPreset: "alphanumeric"
}));

function check() {
  emit("update:valid", validate(props.modelValue ?? ""));
}

// O código fica só no canvas. Escrevê-lo como texto no DOM o exporia no
// inspetor; por isso o desenho é feito aqui, sem conteúdo-filho no elemento.
function draw() {
  const element = canvas.value;
  const context = element?.getContext("2d");
  if (!context) return;

  const { width, height } = props;
  const root = getComputedStyle(document.documentElement);
  const fill = root.getPropertyValue("--fill").trim() || "#e5e0d8";
  const colors = [
    root.getPropertyValue("--text").trim() || "#121715",
    root.getPropertyValue("--brand").trim() || "#1a5490",
    root.getPropertyValue("--success").trim() || "#0b5a3b",
    root.getPropertyValue("--error").trim() || "#9d1f13"
  ];

  context.clearRect(0, 0, width, height);
  context.fillStyle = fill;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(18, 23, 21, 0.28)";
  context.lineWidth = 1;
  for (let index = 0; index < 2; index += 1) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.bezierCurveTo(
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height
    );
    context.stroke();
  }

  context.font = "bold 24px Inter, system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  const chars = code.value.split("");
  const step = width / (chars.length + 1);

  chars.forEach((char, index) => {
    context.save();
    context.translate(step * (index + 1), height / 2 + Math.random() * 6 - 3);
    context.rotate(Math.random() * 0.36 - 0.18);
    context.fillStyle = colors[index % colors.length];
    context.fillText(char, 0, 0);
    context.restore();
  });

  context.fillStyle = "rgba(18, 23, 21, 0.28)";
  for (let index = 0; index < 10; index += 1) {
    context.beginPath();
    context.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2);
    context.fill();
  }
}

function refresh() {
  generate();
  draw();
  check();
  emit("refresh");
}

watch(() => props.modelValue, check);
watch(() => [props.width, props.height], draw);

onMounted(() => {
  generate();
  draw();
  check();
});

defineExpose({ reset: refresh });
</script>

<template>
  <div class="captcha-canvas">
    <canvas
      ref="canvas"
      :width="width"
      :height="height"
      role="img"
      aria-label="Código de verificação"
    ></canvas>
    <button
      class="captcha-canvas__refresh"
      type="button"
      aria-label="Gerar novo código"
      @click="refresh"
    >
      <RefreshCw :size="18" aria-hidden="true" />
    </button>
  </div>
</template>
