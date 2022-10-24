function navigateFromRoot(url) {
  window.location.href = `${window.location.origin}/${url}`;
}

export { navigateFromRoot };
