export function toDarijaLatin(text = '') {
  return [
    'Darija Latin helper',
    `input: ${text || 'ktb chi haja hna'}`,
    '',
    'examples:',
    '- salam, labas?'
    ,'- bghit nbuildi chi project sahl w nadi',
    '- had l command kaynfa3 bash t7ell mochkil بسرعة',
    '- khalli l ux nqiya w bla clutter'
  ].join('\n');
}

export function darijaDevSnippets() {
  return [
    'darija dev snippets',
    '1. bghit prompt n9i bash nbuildi had feature',
    '2. sift liya commit message mratab',
    '3. 3tini readme starter b style clean',
    '4. bghit nfhem had l bug fin kayn'
  ].join('\n');
}
