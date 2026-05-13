"use client";

import type { Action, PlayerSlot, Phase } from "@optcg/shared-types";
import type { PlayerState, CardInstance } from "@optcg/engine";
import { Button } from "@/components/ui/button";

interface ActionPanelProps {
  mySlot: PlayerSlot;
  phase: Phase;
  activePlayer: PlayerSlot;
  myState: PlayerState;
  selectedCardId: string | null;
  selectedTargetId: string | null;
  selectedDonIds: string[];
  onAction: (action: Action) => void;
}

export function ActionPanel({
  mySlot,
  phase,
  activePlayer,
  myState,
  selectedCardId,
  selectedTargetId,
  selectedDonIds,
  onAction,
}: ActionPanelProps) {
  const isMyTurn = activePlayer === mySlot;

  if (phase === "Mulligan") {
    if (!myState.mulliganDone) {
      return (
        <div className="flex gap-2 justify-center">
          <Button onClick={() => onAction({ type: "Mulligan", player: mySlot, keep: true })}>
            Keep Hand
          </Button>
          <Button
            variant="outline"
            onClick={() => onAction({ type: "Mulligan", player: mySlot, keep: false })}
          >
            Mulligan
          </Button>
        </div>
      );
    }
    return <div className="text-center text-sm text-ink-400">Waiting for opponent to mulligan...</div>;
  }

  if (!isMyTurn) {
    return <div className="text-center text-sm text-ink-400">Opponent&apos;s turn — waiting...</div>;
  }

  const selectedCard = selectedCardId
    ? myState.hand.find((c) => c.instanceId === selectedCardId) ??
      myState.characterArea.find((c) => c.instanceId === selectedCardId)
    : null;

  const handCard = selectedCardId
    ? myState.hand.find((c) => c.instanceId === selectedCardId)
    : null;

  const attackerCard = selectedCardId
    ? myState.characterArea.find((c) => c.instanceId === selectedCardId) ??
      (myState.leader.instanceId === selectedCardId ? myState.leader : null)
    : null;

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {phase === "Main" && handCard && handCard.card.type === "Character" && (
        <Button
          size="sm"
          onClick={() =>
            onAction({
              type: "PlayCharacter",
              player: mySlot,
              cardInstanceId: handCard.instanceId,
              donToRest: selectedDonIds,
            })
          }
        >
          Play {handCard.card.name}
        </Button>
      )}

      {phase === "Main" && handCard && handCard.card.type === "Stage" && (
        <Button
          size="sm"
          onClick={() =>
            onAction({
              type: "PlayStage",
              player: mySlot,
              cardInstanceId: handCard.instanceId,
              donToRest: selectedDonIds,
            })
          }
        >
          Play Stage
        </Button>
      )}

      {phase === "Main" && handCard && handCard.card.type === "Event" && (
        <Button
          size="sm"
          onClick={() =>
            onAction({
              type: "PlayEvent",
              player: mySlot,
              cardInstanceId: handCard.instanceId,
              donToRest: selectedDonIds,
            })
          }
        >
          Play Event
        </Button>
      )}

      {phase === "Main" && selectedDonIds.length === 1 && selectedTargetId && (
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            onAction({
              type: "GiveDon",
              player: mySlot,
              donInstanceId: selectedDonIds[0],
              targetInstanceId: selectedTargetId,
            })
          }
        >
          Give DON
        </Button>
      )}

      {phase === "Main" && selectedDonIds.length === 1 && !selectedTargetId && (
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            onAction({
              type: "AttachDonToLeader",
              player: mySlot,
              donInstanceId: selectedDonIds[0],
            })
          }
        >
          DON → Leader
        </Button>
      )}

      {phase === "Main" && attackerCard && (
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            onAction({
              type: "DeclareAttack",
              player: mySlot,
              attackerInstanceId: attackerCard.instanceId,
              targetInstanceId: selectedTargetId,
            })
          }
        >
          Attack{selectedTargetId ? "" : " Leader"}
        </Button>
      )}

      <Button
        size="sm"
        variant="outline"
        onClick={() => onAction({ type: "EndPhase", player: mySlot })}
      >
        End Phase
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={() => onAction({ type: "Surrender", player: mySlot })}
      >
        Surrender
      </Button>
    </div>
  );
}
